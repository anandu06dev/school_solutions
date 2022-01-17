import { PageMetaDto, PageDto } from '@common/dtos'
import { StudentQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
    AllowedEntity,
    Projection,
} from '@resources/resource-model/resource.model'
import { QueryEntityRestrictionException } from '@resources/resources-exception/QueryEntityRestrictionException'
import {
    getQueryJoin,
    getRecordStatus,
    getSecondaryJoinAndIdCondition,
    getStudentAddmissionCondition,
    orderBy,
} from '@resources/resources-util/resource-query-constants'
import {
    getConditionlessQb,
    LookForAdmissionId,
} from '@resources/resources-util/resource-query-util'
import { getCustomRepository, Repository, SelectQueryBuilder } from 'typeorm'
import { StudentDetailRepository } from './customRepository/student-cstm-repository'
import { DeleteStudentDetailDto } from './dto/delete-student-detail.dto'
import { StudentDetailDto } from './dto/student-detail.dto'
import { UpdateStudentDetailDto } from './dto/update-student-detail.dto'
import { StudentDetails } from './entities/student-detail.entity'

@Injectable()
export class StudentDetailsService {
    studentCtsmRepository = getCustomRepository(StudentDetailRepository)

    constructor(
        @InjectRepository(StudentDetails)
        private studentRepository: Repository<StudentDetails>
    ) {}

    create(createStudentDetailDto: StudentDetailDto) {
        return this.studentRepository.save(createStudentDetailDto)
    }

    async findAll(): Promise<StudentDetails[]> {
        return this.studentRepository.find({
            relations: [
                'siblings',
                'parents',
                'fees',
                'busRouteDetails',
                'addresses',
            ],
        })
    }

    async findByAll(): Promise<StudentDetails[]> {
        return this.studentCtsmRepository.findByAll()
    }

    findOne(admissionNo: number): Promise<StudentDetails> {
        return this.studentRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
            relations: [
                'siblings',
                'parents',
                'fees',
                'busRouteDetails',
                'addresses',
            ],
        })
    }

    async update(id: number, updateStudentDetailDto: UpdateStudentDetailDto) {
        try {
            const toUpdate = await this.studentRepository.findOne(id)
            console.log(toUpdate)
            if (!toUpdate) {
                throw new NotFoundException('Student is not found')
            }
            return this.studentRepository.update(id, updateStudentDetailDto)
        } catch (e: unknown) {
            console.log(e)
        }
    }

    async updateStudentStatus(
        id: number,
        deleteStudentDetailDto: DeleteStudentDetailDto
    ) {
        try {
            const toUpdate = await this.studentRepository.findOne(id)
            console.log(toUpdate)
            if (!toUpdate) {
                throw new NotFoundException('Student is not found')
            }
            return this.studentRepository.update(id, deleteStudentDetailDto)
        } catch (e: unknown) {
            console.log(e)
        }
    }

    async findByProjection(id: Projection): Promise<StudentDetails[]> {
        console.log(id.projectionId, id.projectionId[0])
        return this.studentCtsmRepository.findByProjection(id.projectionId)
    }

    async findByProjectionByIdAndActive(
        projection: Projection
    ): Promise<StudentDetails[]> {
        return this.studentCtsmRepository.findByProjectionByIdAndActive(
            projection.projectionId,
            projection.isActive,
            projection.admissionId
        )
    }

    async searchByStudentFirstName(
        studentFirstName: string
    ): Promise<StudentDetails[]> {
        return this.studentCtsmRepository.searchByStudentFirstName(
            studentFirstName
        )
    }

    findByIdAndIsActive(id: number): Promise<StudentDetails> {
        const studentCtsmRepository = getCustomRepository(
            StudentDetailRepository
        )
        return studentCtsmRepository.findByIdAndIsActive(id)
    }

    async getPageableStudents(
        pageOptionsDto: StudentQueryPageOptionsDto
    ): Promise<any> {
        // try {
        if (Array.isArray(pageOptionsDto.join) && pageOptionsDto.uniqueId) {
            throw new QueryEntityRestrictionException()
        } else {
            let queryBuilder = this.studentRepository.createQueryBuilder(
                pageOptionsDto.primaryJoin
            ) as SelectQueryBuilder<AllowedEntity>
            queryBuilder = await getConditionlessQb(queryBuilder, {
                primaryJoin: pageOptionsDto.primaryJoin,
                where: [
                    getRecordStatus(pageOptionsDto.activeRecords),
                    pageOptionsDto.aid
                        ? getStudentAddmissionCondition(pageOptionsDto.aid)
                        : {},
                    pageOptionsDto.getOtherDetails === 'true'
                        ? getSecondaryJoinAndIdCondition(
                              pageOptionsDto.uniqueId,
                              pageOptionsDto.join
                          )
                        : {},
                ],
                queryJoin:
                    pageOptionsDto.getOtherDetails === 'true'
                        ? getQueryJoin(pageOptionsDto.join)
                        : [],
            })
            console.log(pageOptionsDto.join)
            console.log(queryBuilder.getSql())

            queryBuilder = await orderBy(queryBuilder, pageOptionsDto)

            queryBuilder.skip(pageOptionsDto.skip)
            queryBuilder.take(pageOptionsDto.take)
            const raw = await queryBuilder.getManyAndCount()
            const pageMetaDto = new PageMetaDto({
                itemCount: raw[1],
                pageOptionsDto,
            })
            return new PageDto(raw[0], pageMetaDto)
        }
    }
}

// Helper Function many and count or raw , orderby , groupby

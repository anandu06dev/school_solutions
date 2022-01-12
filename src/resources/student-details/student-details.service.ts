import { PageMetaDto, PageDto } from '@common/dtos'
import { QueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
    AllowedEntity,
    Projection,
} from '@resources/resource-model/resource.model'
import { LookForAdmissionId } from '@resources/resources-util/resource-query-util'
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

    async getConditionlessQb(
        qb: SelectQueryBuilder<AllowedEntity>,
        param: { [key: string]: any } = {
            primaryJoin: 'student_details',
            where: [
                {
                    condition:
                        'student_details.studentIsActive =:studentIsActive',
                    params: { studentIsActive: 1 },
                },
            ],
            queryJoin: [
                'siblings',
                'parents',
                'fees',
                'busRouteDetails',
                'addresses',
            ],
        }
    ): Promise<SelectQueryBuilder<AllowedEntity>> {
        if (param?.where && Array.isArray(param.where)) {
            // param.where.forEach((where, index) => {
            //     if (index === 0) qb.where(where.condition, where.params)
            //     else qb.andWhere(where.condition, where.params)
            // })
            for (let i = 0; i < param.where.length; i++) {
                const where = param.where[i]
                if (i === 0) qb.where(where.condition, where.params)
                else qb.andWhere(where.condition, where.params)
            }
        }
        if (
            param.primaryJoin &&
            Array.isArray(param.queryJoin) &&
            param?.queryJoin
        ) {
            // param.queryJoin.forEach((queryJoin) => {
            //     qb.leftJoinAndSelect(
            //         param.primaryJoin + '.' + queryJoin,
            //         queryJoin
            //     )
            // })
            console.dir(param.primaryJoin + '.' + param.queryJoin)
            for (let i = 0; i < param.queryJoin.length; i++) {
                const queryJoin = param.queryJoin[i]
                console.dir(queryJoin, param.primaryJoin + '.' + queryJoin)
                qb.leftJoinAndSelect(
                    param.primaryJoin + '.' + queryJoin,
                    queryJoin
                )
            }
        }
        console.log(qb.getSql())
        return await qb
    }

    async getPageableStudents(
        pageOptionsDto: QueryPageOptionsDto
    ): Promise<any> {
        let itemCount
        let raw
        console.log(pageOptionsDto)
        try {
            let queryBuilder = this.studentRepository.createQueryBuilder(
                'student_details'
            ) as SelectQueryBuilder<AllowedEntity>
            queryBuilder = await this.getConditionlessQb(queryBuilder)
            // queryBuilder.where(
            //     'student_details.studentIsActive =:studentIsActive',
            //     {
            //         studentIsActive: 1,
            //     }
            // )
            // if (pageOptionsDto.aid) {
            //     console.log(pageOptionsDto.aid)
            //     queryBuilder.andWhere(
            //         'student_details.admissionNo IN (:...aid)',
            //         { aid: pageOptionsDto.aid.split(',') }
            //     )
            // }
            // const queryJoin: string[] = [
            //     'siblings',
            //     'parents',
            //     'fees',
            //     'busRouteDetails',
            //     'addresses',
            // ]
            // const mainjoin = 'student_details'
            // if (pageOptionsDto.showStudentDetails !== 'false') {
            //     queryJoin.forEach((item) =>
            //         //`${mainjoin}.${item}`, `${item}`
            //         queryBuilder.leftJoinAndSelect(
            //             `${mainjoin}.${item}`,
            //             `${item}`
            //         )
            //     )
            // }
            console.log(queryBuilder.getSql())
            queryBuilder
                .orderBy(
                    'student_details.createdTimeStamp',
                    pageOptionsDto.order
                )
                .skip(pageOptionsDto.skip)
                .take(pageOptionsDto.take)
            console.log(queryBuilder.getSql())
            const raw = await queryBuilder.getManyAndCount()
            const pageMetaDto = new PageMetaDto({
                itemCount: raw[1],
                pageOptionsDto,
            })
            return new PageDto(raw[0], pageMetaDto)
        } catch (e) {
            console.log(e)
        }
    }
}

// sibilings,parents,fees,busRouteDetails,addresses
//'student_details.fees', 'fees'
function getStudentDetailCustomQueryBuilder(
    qb: any,
    query: string[],
    mainjoin: string
) {
    try {
        return query.map((item) => {
            console.log(`${mainjoin}.${item}`, `${item}`)
            return qb.leftJoinAndSelect(`${mainjoin}.${item}`, `${item}`)
        })
    } catch (e) {
        console.log(e)
    }
}

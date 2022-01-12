import { PageOptionsDto, PageMetaDto, PageDto } from '@common/dtos'
import { QueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Catch, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FeesDetails } from '@resources/fees-details/entities/fees-detail.entity'
import { Projection } from '@resources/resource-model/resource.model'
import { LookForAdmissionId } from '@resources/resources-util/resource-query-util'
import { SiblingDetails } from '@resources/sibling-details/entities/sibling-detail.entity'
import { getCustomRepository, QueryBuilder, Repository } from 'typeorm'
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

    // async getPageableStudents(
    //     pageOptionsDto: QueryPageOptionsDto
    // ): Promise<any> {
    //     const queryBuilder =
    //         this.studentRepository.createQueryBuilder('student_details')

    //     console.log(pageOptionsDto)
    //     //  if (pageOptionsDto.showStudentDetails) {
    //     // queryBuilder.where(
    //     //     'student_details.admissionNo in (' + pageOptionsDto.aid + ')'
    //     // )

    //     // queryBuilder
    //     //     .where('student_details.active =:active', { active: true })
    //     //     .andWhere(
    //     //         'student_details.admissionNo IN (' + pageOptionsDto.aid + ')'
    //     //     )
    //     //  }
    //     // if (pageOptionsDto.showStudentDetails) {
    //     queryBuilder.leftJoinAndSelect(
    //         SiblingDetails,
    //         'sb',
    //         'sb.studentDetails = student_details.admissionNo'
    //     )
    //     // }

    //     queryBuilder
    //         .orderBy('student_details.createdTimeStamp', pageOptionsDto.order)
    //         .skip(pageOptionsDto.skip)
    //         .take(pageOptionsDto.take)
    //     console.log(queryBuilder.getSql())

    //     const itemCount = await queryBuilder.getCount()
    //     //const  data = await queryBuilder.getRawMany()
    //     const { raw, entities } = await queryBuilder.getRawAndEntities()
    //     console.log(raw)
    //     const { sb_id } = raw[0]
    //     const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto })

    //     return new PageDto(entities, pageMetaDto)
    // }

    async getPageableStudents(
        pageOptionsDto: QueryPageOptionsDto
    ): Promise<any> {
        let itemCount
        let raw
        console.log(pageOptionsDto)
        try {
            const queryBuilder =
                this.studentRepository.createQueryBuilder('student_details')
            // if (pageOptionsDto.showStudentDetails !== 'false') {
            //     console.log('showStudentDetails', pageOptionsDto.aid)
            //     queryBuilder.leftJoinAndSelect(
            //         'student_details.siblings',
            //         'siblings'
            //     )
            //     queryBuilder.leftJoinAndSelect(
            //         'student_details.parents',
            //         'parents'
            //     )
            //     queryBuilder.leftJoinAndSelect('student_details.fees', 'fees')
            //     queryBuilder.leftJoinAndSelect(
            //         'student_details.busRouteDetails',
            //         'busRouteDetails'
            //     )
            //     queryBuilder.leftJoinAndSelect(
            //         'student_details.addresses',
            //         'addresses'
            //     )
            // }

            // if (pageOptionsDto.showStudentDetails !== 'false') {
            //     getStudentDetailCustomQueryBuilder(
            //         queryBuilder,
            //         [
            //             'siblings',
            //             'parents',
            //             'fees',
            //             'busRouteDetails',
            //             'addresses',
            //         ],
            //         'student_details'
            //     )
            // }
            queryBuilder.where(
                'student_details.studentIsActive =:studentIsActive',
                {
                    studentIsActive: 1,
                }
            )
            if (pageOptionsDto.aid) {
                console.log(pageOptionsDto.aid)
                queryBuilder.andWhere(
                    'student_details.admissionNo IN (:...aid)',
                    { aid: pageOptionsDto.aid.split(',') }
                )
            }
            const queryJoin: string[] = [
                'siblings',
                'parents',
                'fees',
                'busRouteDetails',
                'addresses',
            ]
            const mainjoin = 'student_details'
            if (pageOptionsDto.showStudentDetails !== 'false') {
                queryJoin.forEach((item) =>
                    //`${mainjoin}.${item}`, `${item}`
                    queryBuilder.leftJoinAndSelect(
                        `${mainjoin}.${item}`,
                        `${item}`
                    )
                )
            }

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

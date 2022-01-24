import {
    SiblingQueryPageOptionsDto,
    StudentQueryPageOptionsDto,
} from '@common/dtos/query-pagination.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getPageableStudentsRepo } from '@resources/repository.module'
import upsert from '@resources/resources-util/resource-query-util'
import { getCustomRepository, Repository } from 'typeorm'
import { StudentDetailRepository } from './customRepository/student-cstm-repository'
import { DeleteStudentDetailDto } from './dto/delete-student-detail.dto'
import { StudentDetailDto } from './dto/student-detail.dto'
import { StudentDetails } from './entities/student-detail.entity'

@Injectable()
export class StudentDetailsService {
    studentCtsmRepository = getCustomRepository(StudentDetailRepository)

    constructor(
        @InjectRepository(StudentDetails)
        private studentRepository: Repository<StudentDetails>
    ) {}

    async createorUpdate(createStudentDetailDto: StudentDetailDto) {
        try {
            return await upsert(
                StudentDetails,
                createStudentDetailDto,
                'admissionNo'
            )
        } catch (e) {
            console.log(e)
        }
    }

    async getPageableStudents(
        pageOptionsDto: StudentQueryPageOptionsDto
    ): Promise<any> {
        return getPageableStudentsRepo(pageOptionsDto, this.studentRepository)
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
}

// Helper Function many and count or raw , orderby , groupby

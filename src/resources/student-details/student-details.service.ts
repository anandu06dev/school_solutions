import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Projection } from '@resources/resource-model/resource.model'
import { getCustomRepository, Repository } from 'typeorm'
import { StudentDetailRepository } from './customRepository/student-cstm-repository'
import { StudentDetailDto } from './dto/student-detail.dto'
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
        return this.studentRepository.find()
    }

    async findByAll(): Promise<StudentDetails[]> {
        return this.studentCtsmRepository.findByAll()
    }

    findOne(id: number): Promise<StudentDetails> {
        return this.studentRepository.findOne(id)
    }

    async update(id: number, updateStudentDetailDto: StudentDetailDto) {
        const toUpdate = await this.studentRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Student is not found')
        }
        return this.studentRepository.update(id, updateStudentDetailDto)
    }

    async remove(id: number) {
        await this.studentRepository.delete(id)
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
}

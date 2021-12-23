import { PageDto, PageMetaDto, PageOptionsDto } from '@common/dtos'
import { Injectable } from '@nestjs/common'

import { CreateStudentDto } from '../dto/create-student.dto'
import { UpdateStudentDto } from '../dto/update-student.dto'

import { StudentRepository } from '../repositories/student.repository'

@Injectable()
export class StudentsService {
    constructor(private readonly _studentRepository: StudentRepository) {}

    public async getStudents(pageOptionsDto: PageOptionsDto): Promise<any> {
        const queryBuilder =
            this._studentRepository.createQueryBuilder('student')
        queryBuilder
            .orderBy('student.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take)

        const itemCount = await queryBuilder.getCount()
        const { entities } = await queryBuilder.getRawAndEntities()
        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto })

        return new PageDto(entities, pageMetaDto)
    }

    create(createStudentDto: CreateStudentDto) {
        return 'This action adds a new student'
    }

    findAll() {
        return `This action returns all students`
    }

    findOnlyRequestedId(id: string) {
        const getIds: string | Array<string> | number = id.split(':')
        const ID: number | Array<number> = getIds.length
            ? getIds.map((i) => Number(i))
            : Number(getIds)

        return `This action returns a #${ID} student`
    }

    findOne(id: number) {
        return `This action returns a #${id} student`
    }

    update(id: number, updateStudentDto: UpdateStudentDto) {
        return `This action updates a #${id} student`
    }

    remove(id: number) {
        return `This action removes a #${id} student`
    }
}

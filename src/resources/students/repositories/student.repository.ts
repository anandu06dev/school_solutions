import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { StudentEntity } from '../entities/student.entity'

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity> {}

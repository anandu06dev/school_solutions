import { Module } from '@nestjs/common'
import { StudentsService } from './services/students.service'
import { StudentsController } from './controllers/students.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentRepository } from './repositories/student.repository'

@Module({
    imports: [TypeOrmModule.forFeature([StudentRepository])],
    controllers: [StudentsController],
    providers: [StudentsService],
})
export class StudentsModule {}

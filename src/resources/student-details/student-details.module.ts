import { Module } from '@nestjs/common'
import { StudentDetailsService } from './student-details.service'
import { StudentDetailsController } from './student-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentDetails } from './entities/student-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([StudentDetails])],
    controllers: [StudentDetailsController],
    providers: [StudentDetailsService],
})
export class StudentDetailsModule {}

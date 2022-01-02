import { Module } from '@nestjs/common'
import { SiblingDetailsService } from './sibling-details.service'
import { SiblingDetailsController } from './sibling-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SiblingDetails } from './entities/sibling-detail.entity'
import { StudentDetails } from '@resources/student-details/entities/student-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([SiblingDetails, StudentDetails])],
    controllers: [SiblingDetailsController],
    providers: [SiblingDetailsService],
})
export class SiblingDetailsModule {}

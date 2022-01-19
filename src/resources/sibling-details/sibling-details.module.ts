import { Module } from '@nestjs/common'
import { SiblingDetailsService } from './sibling-details.service'
import { SiblingDetailsController } from './sibling-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SiblingDetails } from './entities/sibling-detail.entity'
import { StudentDetailsModule } from '@resources/student-details/student-details.module'

@Module({
    imports: [TypeOrmModule.forFeature([SiblingDetails])],
    controllers: [SiblingDetailsController],
    providers: [SiblingDetailsService],
})
export class SiblingDetailsModule {}

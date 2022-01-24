import { Module } from '@nestjs/common'
import { ParentDetailsService } from './parent-details.v1.service'
import { ParentDetailsController } from './parent-details.v1.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ParentDetails } from './entities/parent-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([ParentDetails])],
    controllers: [ParentDetailsController],
    providers: [ParentDetailsService],
})
export class ParentDetailsModule {}

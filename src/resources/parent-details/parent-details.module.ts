import { Module } from '@nestjs/common'
import { ParentDetailsService } from './parent-details.service'
import { ParentDetailsController } from './parent-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ParentDetails } from './entities/parent-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([ParentDetails])],
    controllers: [ParentDetailsController],
    providers: [ParentDetailsService],
})
export class ParentDetailsModule {}

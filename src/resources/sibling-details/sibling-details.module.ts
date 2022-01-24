import { Module } from '@nestjs/common'
import { SiblingDetailsService } from './sibling-details.v1.service'
import { SiblingDetailsController } from './sibling-details.v1.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SiblingDetails } from './entities/sibling-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([SiblingDetails])],
    controllers: [SiblingDetailsController],
    providers: [SiblingDetailsService],
})
export class SiblingDetailsModule {}

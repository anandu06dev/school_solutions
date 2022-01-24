import { Module } from '@nestjs/common'
import { FeesDetailsService } from './fees-details.v1.service'
import { FeesDetailsController } from './fees-details.v1.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FeesDetails } from './entities/fees-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([FeesDetails])],
    controllers: [FeesDetailsController],
    providers: [FeesDetailsService],
})
export class FeesDetailsModule {}

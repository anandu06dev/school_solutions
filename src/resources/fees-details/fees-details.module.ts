import { Module } from '@nestjs/common'
import { FeesDetailsService } from './fees-details.service'
import { FeesDetailsController } from './fees-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FeesDetails } from './entities/fees-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([FeesDetails])],
    controllers: [FeesDetailsController],
    providers: [FeesDetailsService],
})
export class FeesDetailsModule {}

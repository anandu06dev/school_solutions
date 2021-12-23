import { Module } from '@nestjs/common'
import { FeesDetailsService } from './fees-details.service'
import { FeesDetailsController } from './fees-details.controller'

@Module({
    controllers: [FeesDetailsController],
    providers: [FeesDetailsService],
})
export class FeesDetailsModule {}

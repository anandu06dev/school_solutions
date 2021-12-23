import { Module } from '@nestjs/common'
import { ParentDetailsService } from './parent-details.service'
import { ParentDetailsController } from './parent-details.controller'

@Module({
    controllers: [ParentDetailsController],
    providers: [ParentDetailsService],
})
export class ParentDetailsModule {}

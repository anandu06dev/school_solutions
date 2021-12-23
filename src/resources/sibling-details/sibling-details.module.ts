import { Module } from '@nestjs/common'
import { SiblingDetailsService } from './sibling-details.service'
import { SiblingDetailsController } from './sibling-details.controller'

@Module({
    controllers: [SiblingDetailsController],
    providers: [SiblingDetailsService],
})
export class SiblingDetailsModule {}

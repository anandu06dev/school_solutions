import { Module } from '@nestjs/common'
import { AddressDetailsService } from './address-details.service'
import { AddressDetailsController } from './address-details.controller'

@Module({
    controllers: [AddressDetailsController],
    providers: [AddressDetailsService],
})
export class AddressDetailsModule {}

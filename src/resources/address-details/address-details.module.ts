import { Module } from '@nestjs/common'
import { AddressDetailsService } from './address-details.service'
import { AddressDetailsController } from './address-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressDetails } from './entities/address-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([AddressDetails])],
    controllers: [AddressDetailsController],
    providers: [AddressDetailsService],
})
export class AddressDetailsModule {}

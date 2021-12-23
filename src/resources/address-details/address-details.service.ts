import { Injectable } from '@nestjs/common'
import { CreateAddressDetailDto } from './dto/create-address-detail.dto'
import { UpdateAddressDetailDto } from './dto/update-address-detail.dto'

@Injectable()
export class AddressDetailsService {
    create(createAddressDetailDto: CreateAddressDetailDto) {
        return 'This action adds a new addressDetail'
    }

    findAll() {
        return `This action returns all addressDetails`
    }

    findOne(id: number) {
        return `This action returns a #${id} addressDetail`
    }

    update(id: number, updateAddressDetailDto: UpdateAddressDetailDto) {
        return `This action updates a #${id} addressDetail`
    }

    remove(id: number) {
        return `This action removes a #${id} addressDetail`
    }
}

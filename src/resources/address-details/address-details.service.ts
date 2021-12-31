import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { LookForAdmissionId } from '@resources/resources-util/resource-query-util'
import { getCustomRepository, Repository } from 'typeorm'
import { AddressDetailRepository } from './customRepository/address-cstm-repository'
import { AddressDetailDto } from './dto/address-detail.dto'
import { AddressDetails } from './entities/address-detail.entity'

@Injectable()
export class AddressDetailsService {
    addressCtsmRepository = getCustomRepository(AddressDetailRepository)

    constructor(
        @InjectRepository(AddressDetails)
        private addressRepository: Repository<AddressDetails>
    ) {}

    create(addressDetailDto: AddressDetailDto) {
        return this.addressRepository.save(addressDetailDto)
    }

    async findAll(): Promise<AddressDetails[]> {
        return this.addressRepository.find()
    }

    findOne(admissionNo: number): Promise<AddressDetails> {
        return this.addressRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
        })
    }

    async update(id: number, addressDetailDto: AddressDetailDto) {
        const toUpdate = await this.addressRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Address is not found')
        }
        return this.addressRepository.update(id, addressDetailDto)
    }

    async remove(id: number) {
        await this.addressRepository.delete(id)
    }
}

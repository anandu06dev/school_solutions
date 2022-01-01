import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
    LookForAdmissionId,
    LookForId,
} from '@resources/resources-util/resource-query-util'
import { getCustomRepository, In, Repository } from 'typeorm'
import { AddressDetailRepository } from './customRepository/address-cstm-repository'
import { AddressDetailDto } from './dto/address-detail.dto'
import { UpdateAddressDetailDto } from './dto/update-address-detail.dto'
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

    findByAdmissionId(admissionNo: string): Promise<AddressDetails[]> {
        return this.addressRepository.find({
            where: {
                admissionNo: In([admissionNo]),
            },
        })
    }

    async update(id: string, addressDetailDto: UpdateAddressDetailDto) {
        const toUpdate = await this.addressRepository.findOne({
            where: {
                ...LookForId(id),
                ...LookForAdmissionId(addressDetailDto.admissionNo),
            },
        })
        if (!toUpdate) {
            throw new NotFoundException('Address is not found')
        }
        return this.addressRepository.update(id, addressDetailDto)
    }

    async remove(id: number) {
        await this.addressRepository.delete(id)
    }
}

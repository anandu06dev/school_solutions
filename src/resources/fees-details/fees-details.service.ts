import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
    LookForAdmissionId,
    LookForId,
} from '@resources/resources-util/resource-query-util'
import { getCustomRepository, Repository } from 'typeorm'
import { FeeDetailRepository } from './customRepository/fee-cstm-repository'
import { FeesDetailDto } from './dto/fees-detail.dto'
import { UpdateFeesDetailDto } from './dto/update-fees-detail.dto'
import { FeesDetails } from './entities/fees-detail.entity'

@Injectable()
export class FeesDetailsService {
    feeCtsmRepository = getCustomRepository(FeeDetailRepository)

    constructor(
        @InjectRepository(FeesDetails)
        private feesDetailRepository: Repository<FeesDetails>
    ) {}
    create(feesDetailDto: FeesDetailDto) {
        return this.feesDetailRepository.save(feesDetailDto)
    }

    async findAll(): Promise<FeesDetails[]> {
        return this.feesDetailRepository.find()
    }

    findOne(admissionNo: number): Promise<FeesDetails> {
        return this.feesDetailRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
        })
    }

    async update(id: string, feesDetailDto: UpdateFeesDetailDto) {
        const toUpdate = await this.feesDetailRepository.findOne({
            where: {
                ...LookForId(id),
                ...LookForAdmissionId(feesDetailDto.admissionNo),
            },
        })
        if (!toUpdate) {
            throw new NotFoundException('Fee Details is not found')
        }
        return this.feesDetailRepository.update(id, feesDetailDto)
    }

    async remove(id: number) {
        await this.feesDetailRepository.delete(id)
    }
}

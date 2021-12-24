import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getCustomRepository, Repository } from 'typeorm'
import { FeeDetailRepository } from './customRepository/fee-cstm-repository'
import { FeesDetailDto } from './dto/fees-detail.dto'
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

    findOne(id: number): Promise<FeesDetails> {
        return this.feesDetailRepository.findOne(id)
    }

    async update(id: number, feesDetailDto: FeesDetailDto) {
        const toUpdate = await this.feesDetailRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Fee Details is not found')
        }
        return this.feesDetailRepository.update(id, feesDetailDto)
    }

    async remove(id: number) {
        await this.feesDetailRepository.delete(id)
    }
}

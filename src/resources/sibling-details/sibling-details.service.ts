import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getCustomRepository, Repository } from 'typeorm'
import { SiblingDetailRepository } from './customRepository/sibling-cstm-repository'
import { SiblingDetailDto } from './dto/sibling-detail.dto'
import { SiblingDetails } from './entities/sibling-detail.entity'

@Injectable()
export class SiblingDetailsService {
    siblingCtsmRepository = getCustomRepository(SiblingDetailRepository)

    constructor(
        @InjectRepository(SiblingDetails)
        private siblingRepository: Repository<SiblingDetails>
    ) {}

    create(siblingDetailDto: SiblingDetailDto) {
        return this.siblingRepository.save(siblingDetailDto)
    }

    async findAll(): Promise<SiblingDetails[]> {
        return this.siblingRepository.find()
    }

    findOne(id: number): Promise<SiblingDetails> {
        return this.siblingRepository.findOne(id)
    }

    async update(id: number, siblingDetailDto: SiblingDetailDto) {
        const toUpdate = await this.siblingRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Sibling is not found')
        }
        return this.siblingRepository.update(id, siblingDetailDto)
    }

    async remove(id: number) {
        await this.siblingRepository.delete(id)
    }
}

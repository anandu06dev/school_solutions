import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getCustomRepository, Repository } from 'typeorm'
import { ParentDetailRepository } from './customRepository/parent-cstm-repository'
import { ParentDetailDto } from './dto/parent-detail.dto'
import { ParentDetails } from './entities/parent-detail.entity'

@Injectable()
export class ParentDetailsService {
    parentCtsmRepository = getCustomRepository(ParentDetailRepository)

    constructor(
        @InjectRepository(ParentDetails)
        private parentRepository: Repository<ParentDetails>
    ) {}
    create(parentDetailDto: ParentDetailDto) {
        return this.parentRepository.save(parentDetailDto)
    }

    async findAll(): Promise<ParentDetails[]> {
        return this.parentRepository.find()
    }

    findOne(id: number): Promise<ParentDetails> {
        return this.parentRepository.findOne(id)
    }

    async update(id: number, parentDetailDto: ParentDetailDto) {
        const toUpdate = await this.parentRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Parent is not found')
        }
        return this.parentRepository.update(id, parentDetailDto)
    }

    async remove(id: number) {
        await this.parentRepository.delete(id)
    }
}

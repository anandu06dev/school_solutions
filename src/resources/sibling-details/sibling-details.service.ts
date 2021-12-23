import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateSiblingDetailDto } from './dto/create-sibling-detail.dto'
import { UpdateSiblingDetailDto } from './dto/update-sibling-detail.dto'
import { SiblingDetails } from './entities/sibling-detail.entity'

@Injectable()
export class SiblingDetailsService {
    constructor(
        @InjectRepository(SiblingDetails)
        private siblingRepository: Repository<SiblingDetails>
    ) {}

    create(createSiblingDetailDto: CreateSiblingDetailDto) {
        return 'This action adds a new siblingDetail'
    }

    findAll() {
        return `This action returns all siblingDetails`
    }

    findOne(id: number) {
        return `This action returns a #${id} siblingDetail`
    }

    update(id: number, updateSiblingDetailDto: UpdateSiblingDetailDto) {
        return `This action updates a #${id} siblingDetail`
    }

    remove(id: number) {
        return `This action removes a #${id} siblingDetail`
    }
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateParentDetailDto } from './dto/create-parent-detail.dto'
import { UpdateParentDetailDto } from './dto/update-parent-detail.dto'
import { ParentDetails } from './entities/parent-detail.entity'

@Injectable()
export class ParentDetailsService {
    constructor(
        @InjectRepository(ParentDetails)
        private parentRepository: Repository<ParentDetails>
    ) {}
    create(createParentDetailDto: CreateParentDetailDto) {
        return 'This action adds a new parentDetail'
    }

    findAll() {
        return `This action returns all parentDetails`
    }

    findOne(id: number) {
        return `This action returns a #${id} parentDetail`
    }

    update(id: number, updateParentDetailDto: UpdateParentDetailDto) {
        return `This action updates a #${id} parentDetail`
    }

    remove(id: number) {
        return `This action removes a #${id} parentDetail`
    }
}

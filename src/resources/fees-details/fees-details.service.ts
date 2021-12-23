import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateFeesDetailDto } from './dto/create-fees-detail.dto'
import { UpdateFeesDetailDto } from './dto/update-fees-detail.dto'
import { FeesDetails } from './entities/fees-detail.entity'

@Injectable()
export class FeesDetailsService {
    constructor(
        @InjectRepository(FeesDetails)
        private feesRepository: Repository<FeesDetails>
    ) {}
    create(createFeesDetailDto: CreateFeesDetailDto) {
        return 'This action adds a new feesDetail'
    }

    findAll() {
        return `This action returns all feesDetails`
    }

    findOne(id: number) {
        return `This action returns a #${id} feesDetail`
    }

    update(id: number, updateFeesDetailDto: UpdateFeesDetailDto) {
        return `This action updates a #${id} feesDetail`
    }

    remove(id: number) {
        return `This action removes a #${id} feesDetail`
    }
}

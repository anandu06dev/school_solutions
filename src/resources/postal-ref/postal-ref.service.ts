import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getCustomRepository, Repository } from 'typeorm'
import { PostalRefRepository } from './customRepository/postal-cstm-repository'
import { PostalRefDto } from './dto/create-postal-ref.dto'
import { PostalRef } from './entities/postal-ref.entity'
import { PostalRefProjection } from './modal/postal-ref-projection'

@Injectable()
export class PostalRefService {
    postalRefCstmRepository = getCustomRepository(PostalRefRepository)

    constructor(
        @InjectRepository(PostalRef)
        private postalRepository: Repository<PostalRef>
    ) {}
    create(postalRef: PostalRefDto) {
        return this.postalRepository.save(postalRef)
    }

    async findAll(): Promise<PostalRef[]> {
        return this.postalRepository.find()
    }

    findOne(id: number): Promise<PostalRef> {
        return this.postalRepository.findOne(id)
    }

    async update(id: number, postalRef: PostalRefDto) {
        const toUpdate = await this.postalRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Parent is not found')
        }
        return this.postalRepository.update(id, postalRef)
    }

    async remove(id: number) {
        await this.postalRepository.delete(id)
    }

    async findByProjection(
        projection: PostalRefProjection
    ): Promise<PostalRefDto[]> {
        return this.postalRefCstmRepository.searchByPostalref(projection)
    }

    async getAllState(): Promise<PostalRefDto[]> {
        return this.postalRefCstmRepository.getAllStateName()
    }
}

import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getCustomRepository, Repository } from 'typeorm'
import { PostalRefRepository } from './customRepository/postal-cstm-repository'
import { PostalRefDto } from './dto/create-postal-ref.dto'
import { PostalRef } from './entities/postal-ref.entity'
import { PostalRefProjection } from './modal/postal-ref-projection'

@Injectable()
export class PostalRefService {
    postalRefRepository = getCustomRepository(PostalRefRepository)

    constructor(
        @InjectRepository(PostalRef)
        private parentRepository: Repository<PostalRef>
    ) {}
    create(postalRef: PostalRefDto) {
        return this.parentRepository.save(postalRef)
    }

    async findAll(): Promise<PostalRef[]> {
        return this.parentRepository.find()
    }

    findOne(id: number): Promise<PostalRef> {
        return this.parentRepository.findOne(id)
    }

    async update(id: number, postalRef: PostalRefDto) {
        const toUpdate = await this.parentRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Parent is not found')
        }
        return this.parentRepository.update(id, postalRef)
    }

    async remove(id: number) {
        await this.parentRepository.delete(id)
    }

    async findByProjection(
        projection: PostalRefProjection
    ): Promise<PostalRefDto[]> {
        return this.postalRefRepository.searchByPostalref(projection)
    }
}

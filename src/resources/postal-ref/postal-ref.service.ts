import { PageMetaDto } from '@common/dtos/page-meta.dto'
import { PageOptionsDto } from '@common/dtos/page-options.dto'
import { PageDto } from '@common/dtos/page.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getCustomRepository, ILike, Like, Repository } from 'typeorm'
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

    async getPostalNameByDistrict(
        districtName: string
    ): Promise<PostalRefDto[]> {
        return await this.postalRefCstmRepository.getPostalNameByDistrict(
            districtName
        )
    }

    async getPostalNameByState(stateName: string): Promise<PostalRefDto[]> {
        return await this.postalRefCstmRepository.getPostalNameByState(
            stateName
        )
    }

    async getAllState(): Promise<PostalRefDto[]> {
        try {
            console.log('getAllState')
            return await this.postalRefCstmRepository.getAllStateName()
        } catch (e) {
            console.log(e)
        }
    }

    async getPostalNameByPinCode(pincode: string): Promise<PostalRefDto[]> {
        try {
            console.log('getAllState')
            return await this.postalRefCstmRepository.getPostalNameByPinCode(
                pincode
            )
        } catch (e) {
            console.log(e)
        }
    }

    async getPageablePostalRef(pageOptionsDto: PageOptionsDto): Promise<any> {
        try {
            const queryBuilder =
                this.postalRepository.createQueryBuilder('postal_ref')
            queryBuilder
                .orderBy('postal_ref.districtName', pageOptionsDto.order)
                .skip(pageOptionsDto.skip)
                .take(pageOptionsDto.take)

            const raw = await queryBuilder.getManyAndCount()
            const pageMetaDto = new PageMetaDto({
                itemCount: raw[1],
                pageOptionsDto,
            })
            return new PageDto(raw[0], pageMetaDto)
        } catch (e) {
            console.log(e)
        }
    }
}

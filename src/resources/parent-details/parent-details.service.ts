import { PageOptionsDto, PageMetaDto, PageDto } from '@common/dtos'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
    LookForAdmissionId,
    LookForId,
} from '@resources/resources-util/resource-query-util'
import { getCustomRepository, In, Repository } from 'typeorm'
import { ParentDetailRepository } from './customRepository/parent-cstm-repository'
import { ParentDetailDto } from './dto/parent-detail.dto'
import { UpdateParentDetailDto } from './dto/update-parent-detail.dto'
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
        return this.parentRepository.find({
            relations: ['studentDetails'],
        })
    }

    findOne(admissionNo: number): Promise<ParentDetails> {
        return this.parentRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
            relations: ['studentDetails'],
        })
    }
    findByAdmissionId(admissionNo: string): Promise<ParentDetails[]> {
        return this.parentRepository.find({
            where: {
                admissionNo: In([admissionNo]),
            },

            relations: ['studentDetails'],
        })
    }

    async update(id: string, parentDetailDto: UpdateParentDetailDto) {
        const toUpdate = await this.parentRepository.findOne({
            where: {
                ...LookForId(id),
                ...LookForAdmissionId(parentDetailDto.admissionNo),
            },
        })
        if (!toUpdate) {
            throw new NotFoundException('Parent is not found')
        }
        return this.parentRepository.update(id, parentDetailDto)
    }

    async remove(id: number) {
        await this.parentRepository.delete(id)
    }

    async getPageableParentDetails(
        pageOptionsDto: PageOptionsDto
    ): Promise<any> {
        const queryBuilder =
            this.parentRepository.createQueryBuilder('parent_details')
        queryBuilder
            //.orderBy('student.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take)

        const itemCount = await queryBuilder.getCount()
        const { entities } = await queryBuilder.getRawAndEntities()
        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto })

        return new PageDto(entities, pageMetaDto)
    }
}

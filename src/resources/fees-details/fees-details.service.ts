import { PageOptionsDto, PageMetaDto, PageDto } from '@common/dtos'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
    LookForAdmissionId,
    LookForId,
} from '@resources/resources-util/resource-query-util'
import { getCustomRepository, In, Repository } from 'typeorm'
import { FeeDetailRepository } from './customRepository/fee-cstm-repository'
import { FeesDetailDto } from './dto/fees-detail.dto'
import { UpdateFeesDetailDto } from './dto/update-fees-detail.dto'
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
        return this.feesDetailRepository.find({
            relations: ['studentDetails'],
        })
    }

    findOne(admissionNo: number): Promise<FeesDetails> {
        return this.feesDetailRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
            relations: ['studentDetails'],
        })
    }

    findByAdmissionId(admissionNo: string): Promise<FeesDetails[]> {
        return this.feesDetailRepository.find({
            where: {
                admissionNo: In([admissionNo]),
            },
            relations: ['studentDetails'],
        })
    }

    async update(id: string, feesDetailDto: UpdateFeesDetailDto) {
        const toUpdate = await this.feesDetailRepository.findOne({
            where: {
                ...LookForId(id),
                ...LookForAdmissionId(feesDetailDto.admissionNo),
            },
        })
        if (!toUpdate) {
            throw new NotFoundException('Fee Details is not found')
        }
        return this.feesDetailRepository.update(id, feesDetailDto)
    }

    async remove(id: number) {
        await this.feesDetailRepository.delete(id)
    }

    async getPageableFeesDetails(pageOptionsDto: PageOptionsDto): Promise<any> {
        const queryBuilder =
            this.feesDetailRepository.createQueryBuilder('fees_details')
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

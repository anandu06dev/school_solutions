import { PageOptionsDto, PageMetaDto, PageDto } from '@common/dtos'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
    LookForAdmissionId,
    LookForId,
} from '@resources/resources-util/resource-query-util'
import { getCustomRepository, In, Repository } from 'typeorm'
import { BusDetailRepository } from './customRepository/busroute-cstm-repository'
import { BusRouteDetailDto } from './dto/bus-route-detail.dto'
import { UpdateBusRouteDetailDto } from './dto/update-bus-route-detail.dto'
import { BusRouteDetails } from './entities/bus-route-detail.entity'

@Injectable()
export class BusRouteDetailsService {
    busCtsmRepository = getCustomRepository(BusDetailRepository)

    constructor(
        @InjectRepository(BusRouteDetails)
        private busRouteRepository: Repository<BusRouteDetails>
    ) {}

    create(busRouteDetailDto: BusRouteDetailDto) {
        return this.busRouteRepository.save(busRouteDetailDto)
    }

    async findAll(): Promise<BusRouteDetails[]> {
        return this.busRouteRepository.find({
            relations: ['studentDetails'],
        })
    }

    findOne(admissionNo: number): Promise<BusRouteDetails> {
        return this.busRouteRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
            relations: ['studentDetails'],
        })
    }

    findByAdmissionId(admissionNo: string): Promise<BusRouteDetails[]> {
        return this.busRouteRepository.find({
            where: {
                admissionNo: In([admissionNo]),
            },
            relations: ['studentDetails'],
        })
    }

    async update(id: string, busRouteDetailDto: UpdateBusRouteDetailDto) {
        const toUpdate = await this.busRouteRepository.findOne({
            where: {
                ...LookForId(id),
                ...LookForAdmissionId(busRouteDetailDto.admissionNo),
            },
        })
        if (!toUpdate) {
            throw new NotFoundException('BusRoute Details is not found')
        }
        return this.busRouteRepository.update(id, busRouteDetailDto)
    }

    async remove(id: number) {
        await this.busRouteRepository.delete(id)
    }

    async getPageableBusRouteDetails(
        pageOptionsDto: PageOptionsDto
    ): Promise<any> {
        const queryBuilder =
            this.busRouteRepository.createQueryBuilder('bus_route_details')
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

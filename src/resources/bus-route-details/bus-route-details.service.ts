import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { LookForAdmissionId } from '@resources/resources-util/resource-query-util'
import { getCustomRepository, Repository } from 'typeorm'
import { BusDetailRepository } from './customRepository/busroute-cstm-repository'
import { BusRouteDetailDto } from './dto/bus-route-detail.dto'
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
        return this.busRouteRepository.find()
    }

    findOne(admissionNo: number): Promise<BusRouteDetails> {
        return this.busRouteRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
        })
    }

    async update(id: number, busRouteDetailDto: BusRouteDetailDto) {
        const toUpdate = await this.busRouteRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('BusRoute Details is not found')
        }
        return this.busRouteRepository.update(id, busRouteDetailDto)
    }

    async remove(id: number) {
        await this.busRouteRepository.delete(id)
    }
}

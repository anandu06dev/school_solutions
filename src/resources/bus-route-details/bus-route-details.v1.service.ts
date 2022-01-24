import { BusRouteQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable } from '@nestjs/common'
import { ModuleRef, ContextIdFactory } from '@nestjs/core'
import { InjectRepository } from '@nestjs/typeorm'
import upsert from '@resources/resources-util/resource-query-util'
import { StudentDetailsService } from '@resources/student-details/student-details.v1.service'
import { getCustomRepository, Repository } from 'typeorm'
import { BusDetailRepository } from './customRepository/busroute-cstm-repository'
import { BusRouteDetailDto } from './dto/bus-route-detail.dto'
import { BusRouteDetails } from './entities/bus-route-detail.entity'

@Injectable()
export class BusRouteDetailsService {
    busCtsmRepository = getCustomRepository(BusDetailRepository)

    studentService: StudentDetailsService
    constructor(
        @InjectRepository(BusRouteDetails)
        private siblingRepository: Repository<BusRouteDetails>,
        private moduleRef: ModuleRef
    ) {}
    async onModuleInit() {
        const contextId = ContextIdFactory.create()
        this.moduleRef.registerRequestByContextId(
            StudentDetailsService,
            contextId
        )
        this.studentService = await this.moduleRef.resolve(
            StudentDetailsService,
            contextId,
            { strict: false }
        )
    }

    async remove(id: number) {
        await this.siblingRepository.delete(id)
    }

    async getPageable(
        pageOptionsDto: BusRouteQueryPageOptionsDto
    ): Promise<any> {
        return await this.studentService.getPageableStudents(pageOptionsDto)
    }

    async createorUpdate(dto: BusRouteDetailDto) {
        try {
            return await upsert(BusRouteDetails, dto, 'id')
        } catch (e) {
            console.log(e)
        }
    }
}

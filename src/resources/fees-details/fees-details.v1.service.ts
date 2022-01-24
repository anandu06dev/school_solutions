import { FeesDetailQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable } from '@nestjs/common'
import { ModuleRef, ContextIdFactory } from '@nestjs/core'
import { InjectRepository } from '@nestjs/typeorm'
import upsert from '@resources/resources-util/resource-query-util'
import { StudentDetailsService } from '@resources/student-details/student-details.v1.service'
import { getCustomRepository, Repository } from 'typeorm'
import { FeeDetailRepository } from './customRepository/fee-cstm-repository'
import { FeesDetailDto } from './dto/fees-detail.dto'
import { FeesDetails } from './entities/fees-detail.entity'

@Injectable()
export class FeesDetailsService {
    feeCtsmRepository = getCustomRepository(FeeDetailRepository)

    studentService: StudentDetailsService
    constructor(
        @InjectRepository(FeesDetails)
        private siblingRepository: Repository<FeesDetails>,
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
        pageOptionsDto: FeesDetailQueryPageOptionsDto
    ): Promise<any> {
        return await this.studentService.getPageableStudents(pageOptionsDto)
    }

    async createorUpdate(createSiblingDto: FeesDetailDto) {
        try {
            return await upsert(FeesDetails, createSiblingDto, 'id')
        } catch (e) {
            console.log(e)
        }
    }
}

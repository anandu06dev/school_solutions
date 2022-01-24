import { ParentQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable } from '@nestjs/common'
import { ModuleRef, ContextIdFactory } from '@nestjs/core'
import { InjectRepository } from '@nestjs/typeorm'
import upsert from '@resources/resources-util/resource-query-util'
import { StudentDetailsService } from '@resources/student-details/student-details.v1.service'
import { getCustomRepository, Repository } from 'typeorm'
import { ParentDetailRepository } from './customRepository/parent-cstm-repository'
import { ParentDetailDto } from './dto/parent-detail.dto'
import { ParentDetails } from './entities/parent-detail.entity'

@Injectable()
export class ParentDetailsService {
    parentCtsmRepository = getCustomRepository(ParentDetailRepository)
    studentService: StudentDetailsService
    constructor(
        @InjectRepository(ParentDetails)
        private siblingRepository: Repository<ParentDetails>,
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

    async getPageable(pageOptionsDto: ParentQueryPageOptionsDto): Promise<any> {
        return await this.studentService.getPageableStudents(pageOptionsDto)
    }

    async createorUpdate(createSiblingDto: ParentDetailDto) {
        try {
            return await upsert(ParentDetails, createSiblingDto, 'id')
        } catch (e) {
            console.log(e)
        }
    }
}

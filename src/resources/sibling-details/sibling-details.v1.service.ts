import { SiblingQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { ContextIdFactory, ModuleRef } from '@nestjs/core'
import { InjectRepository } from '@nestjs/typeorm'
import upsert from '@resources/resources-util/resource-query-util'
import { StudentDetailsService } from '@resources/student-details/student-details.v1.service'
import { getCustomRepository, Repository } from 'typeorm'
import { SiblingDetailRepository } from './customRepository/sibling-cstm-repository'
import { SiblingDetailDto } from './dto/sibling-detail.dto'
import { SiblingDetails } from './entities/sibling-detail.entity'

@Injectable()
export class SiblingDetailsService implements OnModuleInit {
    siblingCtsmRepository = getCustomRepository(SiblingDetailRepository)
    studentService: StudentDetailsService
    constructor(
        @InjectRepository(SiblingDetails)
        private siblingRepository: Repository<SiblingDetails>,
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

    async getPageableSibDetails(
        pageOptionsDto: SiblingQueryPageOptionsDto
    ): Promise<any> {
        return await this.studentService.getPageableStudents(pageOptionsDto)
    }

    async createorUpdate(createSiblingDto: SiblingDetailDto) {
        try {
            return await upsert(SiblingDetails, createSiblingDto, 'id')
        } catch (e) {
            console.log(e)
        }
    }
}

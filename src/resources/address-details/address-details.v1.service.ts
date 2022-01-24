import { AddressQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable } from '@nestjs/common'
import { ModuleRef, ContextIdFactory } from '@nestjs/core'
import { InjectRepository } from '@nestjs/typeorm'
import upsert from '@resources/resources-util/resource-query-util'
import { StudentDetailsService } from '@resources/student-details/student-details.v1.service'
import { getCustomRepository, Repository } from 'typeorm'
import { AddressDetailRepository } from './customRepository/address-cstm-repository'
import { AddressDetailDto } from './dto/address-detail.dto'
import { AddressDetails } from './entities/address-detail.entity'

@Injectable()
export class AddressDetailsService {
    addressCtsmRepository = getCustomRepository(AddressDetailRepository)

    studentService: StudentDetailsService
    constructor(
        @InjectRepository(AddressDetails)
        private siblingRepository: Repository<AddressDetails>,
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
        pageOptionsDto: AddressQueryPageOptionsDto
    ): Promise<any> {
        return await this.studentService.getPageableStudents(pageOptionsDto)
    }

    async createorUpdate(createSiblingDto: AddressDetailDto) {
        try {
            return await upsert(AddressDetails, createSiblingDto, 'id')
        } catch (e) {
            console.log(e)
        }
    }
}

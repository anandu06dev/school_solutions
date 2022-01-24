import { SiblingQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common'
import { ContextIdFactory, ModuleRef } from '@nestjs/core'
import { InjectRepository } from '@nestjs/typeorm'
import upsert, {
    LookForAdmissionId,
    LookForId,
} from '@resources/resources-util/resource-query-util'
import { StudentDetailsService } from '@resources/student-details/student-details.v1.service'
import { getCustomRepository, In, Repository } from 'typeorm'
import { SiblingDetailRepository } from './customRepository/sibling-cstm-repository'
import { SiblingDetailDto } from './dto/sibling-detail.dto'
import { UpdateSiblingDetailDto } from './dto/update-sibling-detail.dto'
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
        console.log(this.studentService) // true
    }
    create(siblingDetailDto: SiblingDetailDto) {
        return this.siblingRepository.save(siblingDetailDto)
    }

    async findAll() {
        try {
            return await this.siblingRepository.find({
                relations: ['studentDetails'],
            })
        } catch (e) {
            console.log(e)
        }
    }

    findOne(admissionNo: number): Promise<SiblingDetails> {
        return this.siblingRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
            relations: ['studentDetails'],
        })
    }

    async findByAdmissionId(admissionNo: string) {
        try {
            return await this.siblingRepository.find({
                where: {
                    admissionNo: In([admissionNo]),
                },
                relations: ['studentDetails'],
            })
        } catch (e) {
            console.log(e)
        }
    }

    async update(id: string, siblingDetailDto: UpdateSiblingDetailDto) {
        const toUpdate = await this.siblingRepository.findOne({
            where: {
                ...LookForId(id),
                ...LookForAdmissionId(siblingDetailDto.admissionNo),
            },
        })
        if (!toUpdate) {
            throw new NotFoundException('Sibling is not found')
        }
        return this.siblingRepository.update(id, siblingDetailDto)
    }

    async remove(id: number) {
        await this.siblingRepository.delete(id)
    }

    async findByAllSibDetails() {
        try {
            //  await this.siblingCtsmRepository.findByAllSibDetails()
            await this.siblingRepository.find({
                relations: ['student_details'],
                where: {
                    admissionNo: 1001,
                },
            })
        } catch (Error) {
            console.log(Error)
        }
    }

    async getPageableSibDetails(
        pageOptionsDto: SiblingQueryPageOptionsDto
    ): Promise<any> {
        return await this.studentService.getPageableStudents(pageOptionsDto)
    }

    async createorUpdate(createSiblingDto: SiblingDetailDto) {
        try {
            return await upsert(SiblingDetails, createSiblingDto, 'id', [
                'siblingClass',
            ])
        } catch (e) {
            console.log(e)
        }
    }
}

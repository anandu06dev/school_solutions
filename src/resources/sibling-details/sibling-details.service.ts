import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import {
    LookForAdmissionId,
    LookForId,
} from '@resources/resources-util/resource-query-util'
import { StudentDetails } from '@resources/student-details/entities/student-detail.entity'
import { getCustomRepository, In, Repository } from 'typeorm'
import { SiblingDetailRepository } from './customRepository/sibling-cstm-repository'
import { SiblingDetailDto } from './dto/sibling-detail.dto'
import { UpdateSiblingDetailDto } from './dto/update-sibling-detail.dto'
import { SiblingDetails } from './entities/sibling-detail.entity'

@Injectable()
export class SiblingDetailsService {
    siblingCtsmRepository = getCustomRepository(SiblingDetailRepository)

    constructor(
        @InjectRepository(SiblingDetails)
        private siblingRepository: Repository<SiblingDetails>,
        @InjectRepository(StudentDetails)
        private studentDtls: Repository<StudentDetails>
    ) {}

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
}

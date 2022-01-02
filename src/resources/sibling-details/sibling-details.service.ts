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
            return await this.joinStudentDetails(this.siblingRepository.find())
        } catch (e) {
            console.log(e)
        }
    }

    findOne(admissionNo: number): Promise<SiblingDetails> {
        return this.siblingRepository.findOne({
            where: {
                ...LookForAdmissionId(admissionNo),
            },
        })
    }

    async findByAdmissionId(admissionNo: string) {
        try {
            const siblingDetails = await this.siblingRepository.find({
                where: {
                    admissionNo: In([admissionNo]),
                },
            })

            const studentDetails = await this.studentDtls.find({
                where: {
                    admissionNo: In([admissionNo]),
                },
            })
            const siblings = siblingDetails.map((item: any) => {
                item['studentDetails'] = studentDetails[0]
                return item
            })
            return siblings
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
        //  await this.siblingCtsmRepository.findByAllSibDetails()
    }

    private async joinStudentDetails(genericData: Promise<any[]>) {
        const data = await genericData
        const admissionNo: string | number[] = data.map((i) => i.admissionNo)
        const studentDetailsRes = await this.studentDtls.find({
            where: {
                admissionNo: In([admissionNo]),
            },
        })
        const res = []
        for (const item of data) {
            const student = studentDetailsRes.filter(
                (i) => +item['admissionNo'] === +i['admissionNo'] && i
            )
            item['studentDetails'] = student[0]
            res.push(item)
        }

        return res
    }
}

import { IsNotEmpty } from 'class-validator'
import { Timestamp } from 'typeorm'

export class SiblingDetailDto {
    admissionNo?: number
    @IsNotEmpty()
    siblingClass?: string
    @IsNotEmpty()
    siblingRelation?: number
    @IsNotEmpty()
    siblingDob?: Timestamp
    @IsNotEmpty()
    siblingDiscount?: number
}

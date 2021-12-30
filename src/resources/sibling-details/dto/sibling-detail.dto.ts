import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Timestamp } from 'typeorm'

export class SiblingDetailDto {
    admissionNo?: number
    @ApiProperty({
        example: 'Class',
        type: 'text',
        description: 'Describes about SiblingClass',
    })
    @IsNotEmpty()
    siblingClass?: string
    @ApiProperty({
        example: 'Brother/Sister',
        type: 'number',
        description: 'Describes about SiblingRelation',
    })
    @IsNotEmpty()
    siblingRelation?: number
    @ApiProperty({
        example: '31-12-1999',
        type: 'Timestamp',
        description: 'Describes about SiblingDob',
    })
    @IsNotEmpty()
    siblingDob?: Timestamp
    @ApiProperty({
        example: '20',
        type: 'number',
        description: 'Describes about SiblingDiscount',
    })
    @IsNotEmpty()
    siblingDiscount?: number
}

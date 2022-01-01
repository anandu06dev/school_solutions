import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'
import { Timestamp } from 'typeorm'

export class UpdateSiblingDetailDto {
    @ApiProperty({
        example: '1234',
        type: 'text',
        description: 'Describes about admissionNo',
    })
    @IsNotEmpty()
    admissionNo: number
    @ApiProperty({
        example: '123123213213-213213123-safsaf',
        type: 'text',
        description: 'Describes about id/unique id of the sibling',
    })
    @IsNotEmpty()
    id: string
    @ApiProperty({
        example: 'Class',
        type: 'text',
        description: 'Describes about SiblingClass',
    })
    @IsNotEmpty()
    @IsOptional()
    siblingClass?: string
    @ApiProperty({
        example: 'Brother/Sister',
        type: 'number',
        description: 'Describes about SiblingRelation',
    })
    @IsNotEmpty()
    @IsOptional()
    siblingRelation?: number
    @ApiProperty({
        example: '31-12-1999',
        type: 'Timestamp',
        description: 'Describes about SiblingDob',
    })
    @IsNotEmpty()
    @IsOptional()
    siblingDob?: Timestamp
    @ApiProperty({
        example: '20',
        type: 'number',
        description: 'Describes about SiblingDiscount',
    })
    @IsNotEmpty()
    @IsOptional()
    siblingDiscount?: number
}

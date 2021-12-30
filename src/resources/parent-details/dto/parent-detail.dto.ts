import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class ParentDetailDto {
    admissionNo: number
    @ApiProperty({
        example: '1234',
        type: 'number',
        description: 'Describes about ParentCode',
    })
    @IsNotEmpty()
    parentCode?: number
    @ApiProperty({
        example: 'BE',
        type: 'string',
        description: 'Describes about ParentEducation',
    })
    @IsNotEmpty()
    parentEducation?: string
    @ApiProperty({
        example: 'IT Professional',
        type: 'string',
        description: 'Describes about ParentOccupation',
    })
    @IsNotEmpty()
    parentOccupation?: string
    @ApiProperty({
        example: '1234-1234-1243-1232',
        type: 'number',
        description: 'Describes about ParentAadharNo',
    })
    @IsNotEmpty()
    parentAadharNo?: number
    @ApiProperty({
        example: '8676767676',
        type: 'number',
        description: 'Describes about ParentPhoneNo',
    })
    @IsNotEmpty()
    parentPhoneNo?: number
    @ApiProperty({
        example: 'parentEmail@.com',
        type: 'email',
        description: 'Describes about ParentEmailId',
    })
    @IsNotEmpty()
    parentEmailId?: string
}

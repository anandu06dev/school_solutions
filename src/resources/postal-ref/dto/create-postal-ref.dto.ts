import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class PostalRefDto {
    @ApiProperty({
        example: 'postalName',
        description: 'PostalName',
        type: 'string',
    })
    @IsOptional()
    postalName: string

    @ApiProperty({
        example: 'pincode',
        description: 'PinCode',
        type: 'number',
    })
    @IsNotEmpty()
    @IsOptional()
    pincode: string

    @ApiProperty({
        example: 'taluk',
        description: 'Taluka Name',
        type: 'string',
    })
    @IsNotEmpty()
    @IsOptional()
    taluk: string

    @ApiProperty({
        example: 'districtName',
        description: 'District Name',
        type: 'string',
    })
    @IsNotEmpty()
    @IsOptional()
    districtName: string

    @ApiProperty({
        example: 'stateName',
        description: 'StateName',
        type: 'string',
    })
    @IsNotEmpty()
    @IsOptional()
    stateName: string
}

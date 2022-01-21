import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsNotEmpty } from 'class-validator'
import { PageOptionsDto } from './page-options.dto'

export class QueryPostalRefDto extends PageOptionsDto {
    @ApiPropertyOptional({
        example: 'postalName',
        description: 'PostalName',
        type: 'string',
    })
    @IsOptional()
    postalName: string

    @ApiPropertyOptional({
        example: 'pincode',
        description: 'PinCode',
        type: 'number',
    })
    @IsNotEmpty()
    @IsOptional()
    pincode: string

    @ApiPropertyOptional({
        example: 'taluk',
        description: 'Taluka Name',
        type: 'string',
    })
    @IsNotEmpty()
    @IsOptional()
    taluk: string

    @ApiPropertyOptional({
        example: 'districtName',
        description: 'District Name',
        type: 'string',
    })
    @IsNotEmpty()
    @IsOptional()
    districtName: string

    @ApiPropertyOptional({
        example: 'stateName',
        description: 'StateName',
        type: 'string',
    })
    @IsNotEmpty()
    @IsOptional()
    stateName: string
}

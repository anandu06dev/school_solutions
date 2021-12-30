import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class AddressDetailDto {
    admissionNo?: number
    @ApiProperty({
        example: 'printAddressPstlCd',
        type: 'string',
        description: 'Describes about printAddressPstlCd',
    })
    @IsNotEmpty()
    printAddressPstlCd?: string | null
    @ApiProperty({
        example: 'printAddressDist',
        type: 'string',
        description: 'Describes about printAddressDist',
    })
    @IsNotEmpty()
    printAddressDist?: string | null
    @ApiProperty({
        example: 'printAddressCd',
        type: 'string',
        description: 'Describes about printAddressCd',
    })
    @IsNotEmpty()
    printAddressCd?: string
    @ApiProperty({
        example: 'printAddressAdd1',
        type: 'string',
        description: 'Describes about Print Address Add1',
    })
    @IsNotEmpty()
    printAddressAdd1?: string | null
    @ApiProperty({
        example: 'printAddressAdd2',
        type: 'string',
        description: 'Describes about Print Address Add2',
    })
    @IsNotEmpty()
    printAddressAdd2?: string | null
    @ApiProperty({
        example: 'printAddressAdd3',
        type: 'string',
        description: 'Describes about Print Address Add3',
    })
    @IsNotEmpty()
    printAddressAdd3?: string | null
    @ApiProperty({
        example: 'printAddressAdd4',
        type: 'string',
        description: 'Describes about Print Address Add4',
    })
    @IsNotEmpty()
    printAddressAdd4?: string | null
    @ApiProperty({
        example: 'printAddressAdd5',
        type: 'string',
        description: 'Describes about Print Address Add5',
    })
    @IsNotEmpty()
    printAddressAdd5?: string | null
}

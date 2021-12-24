import { IsNotEmpty } from 'class-validator'

export class AddressDetailDto {
    admissionNo?: number
    @IsNotEmpty()
    printAddressPstlCd?: string | null
    @IsNotEmpty()
    printAddressDist?: string | null
    @IsNotEmpty()
    printAddressCd?: string
    @IsNotEmpty()
    printAddressAdd1?: string | null
    @IsNotEmpty()
    printAddressAdd2?: string | null
    @IsNotEmpty()
    printAddressAdd3?: string | null
    @IsNotEmpty()
    printAddressAdd4?: string | null
    @IsNotEmpty()
    printAddressAdd5?: string | null
}

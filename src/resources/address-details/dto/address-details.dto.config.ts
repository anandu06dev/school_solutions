import { AddressDetailDto } from './address-detail.dto'

export class AddressDetailDtoConfig extends AddressDetailDto {
    constructor() {
        super()
        return {
            printAddressAdd5: super.printAddressAdd5,
            printAddressAdd4: super.printAddressAdd4,
            printAddressAdd3: super.printAddressAdd3,
            printAddressAdd2: super.printAddressAdd2,
            printAddressAdd1: super.printAddressAdd1,
            printAddressCd: super.printAddressCd,
            printAddressDist: super.printAddressDist,
            printAddressPstlCd: super.printAddressPstlCd,
            admissionNo: super.admissionNo,
        }
    }
}

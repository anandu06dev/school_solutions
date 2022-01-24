import { AddressDetailDto } from './address-detail.dto'

export class AddressDetailDtoConfig extends AddressDetailDto {
    constructor() {
        super()
        return {
            printAddressAdd5: null,
            printAddressAdd4: null,
            printAddressAdd3: null,
            printAddressAdd2: null,
            printAddressAdd1: null,
            printAddressCd: null,
            printAddressDist: null,
            printAddressPstlCd: null,
        }
    }
}

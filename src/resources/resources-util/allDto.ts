import { AddressDetailDtoConfig } from '@resources/address-details/dto/address-details.dto.config'

export const GET_ALL_CONFIG_DTOS = {
    addressDetails: { ...new AddressDetailDtoConfig() },
}

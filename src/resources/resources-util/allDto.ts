import { AddressDetailDtoConfig } from '@resources/address-details/dto/address-details.dto.config'
import { BusRouteDetailDtoConfig } from '@resources/bus-route-details/dto/bus-route-detail.dto.config'
import { FeesDetailDtoconfig } from '@resources/fees-details/dto/fees-detail.dto.config'
import { ParentDetailDtoConfig } from '@resources/parent-details/dto/parent-detail.dto.config'
import { SiblingDetailDtoConfig } from '@resources/sibling-details/dto/sibling-detail.dto.config'
import { StudentDetailDtoConfig } from '@resources/student-details/dto/student-detail.dto.config'

export const DTO_PROVIDERS = [
    StudentDetailDtoConfig,
    SiblingDetailDtoConfig,
    FeesDetailDtoconfig,
    BusRouteDetailDtoConfig,
    ParentDetailDtoConfig,
    AddressDetailDtoConfig,
]

export const GET_ALL_CONFIG_DTOS = {
    studentDetails: { ...new StudentDetailDtoConfig() },
    siblingDetails: { ...new SiblingDetailDtoConfig() },
    feesDetails: { ...new FeesDetailDtoconfig() },
    busRouteDetails: { ...new BusRouteDetailDtoConfig() },
    parentDetails: { ...new ParentDetailDtoConfig() },
    addressDetails: { ...new AddressDetailDtoConfig() },
}

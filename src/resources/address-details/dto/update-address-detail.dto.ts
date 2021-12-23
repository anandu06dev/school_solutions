import { PartialType } from '@nestjs/mapped-types'
import { CreateAddressDetailDto } from './create-address-detail.dto'

export class UpdateAddressDetailDto extends PartialType(
    CreateAddressDetailDto
) {}

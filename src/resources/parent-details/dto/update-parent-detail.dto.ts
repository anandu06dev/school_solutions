import { PartialType } from '@nestjs/mapped-types'
import { CreateParentDetailDto } from './create-parent-detail.dto'

export class UpdateParentDetailDto extends PartialType(CreateParentDetailDto) {}

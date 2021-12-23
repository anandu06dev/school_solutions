import { PartialType } from '@nestjs/mapped-types'
import { CreateSiblingDetailDto } from './create-sibling-detail.dto'

export class UpdateSiblingDetailDto extends PartialType(
    CreateSiblingDetailDto
) {}

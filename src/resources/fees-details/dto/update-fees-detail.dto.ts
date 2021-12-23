import { PartialType } from '@nestjs/mapped-types'
import { CreateFeesDetailDto } from './create-fees-detail.dto'

export class UpdateFeesDetailDto extends PartialType(CreateFeesDetailDto) {}

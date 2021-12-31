import { PartialType } from '@nestjs/mapped-types'
import { PostalRefDto } from './create-postal-ref.dto'

export class UpdatePostalRefDto extends PartialType(PostalRefDto) {}

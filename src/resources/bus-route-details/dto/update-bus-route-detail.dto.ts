import { PartialType } from '@nestjs/mapped-types'
import { CreateBusRouteDetailDto } from './create-bus-route-detail.dto'

export class UpdateBusRouteDetailDto extends PartialType(
    CreateBusRouteDetailDto
) {}

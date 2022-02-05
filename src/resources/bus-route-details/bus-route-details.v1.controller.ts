import { BusRouteQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { BusRouteDetailsService } from './bus-route-details.v1.service'
import { BusRouteDetailDto } from './dto/bus-route-detail.dto'
import { UpdateBusRouteDetailDto } from './dto/update-bus-route-detail.dto'

@ApiTags('/v1/bus-route-details')
// @UseGuards(AuthGuard())
@Controller('/v1/bus-route-details')
export class BusRouteDetailsController {
    constructor(
        private readonly busRouteDetailsService: BusRouteDetailsService
    ) {}

    @Post()
    create(@Body() createBusRouteDetailDto: BusRouteDetailDto) {
        return this.busRouteDetailsService.createorUpdate(
            createBusRouteDetailDto
        )
    }

    @Get('/')
    getPageableBusrouteDetails(
        @Query('pagination') pagination?: BusRouteQueryPageOptionsDto
    ) {
        return this.busRouteDetailsService.getPageable(pagination)
    }

    @Patch()
    update(@Body() updateBusRouteDetailDto: UpdateBusRouteDetailDto) {
        return this.busRouteDetailsService.createorUpdate(
            updateBusRouteDetailDto
        )
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.busRouteDetailsService.remove(+id)
    }
}

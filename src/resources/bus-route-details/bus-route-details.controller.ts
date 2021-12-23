import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { BusRouteDetailsService } from './bus-route-details.service'
import { CreateBusRouteDetailDto } from './dto/create-bus-route-detail.dto'
import { UpdateBusRouteDetailDto } from './dto/update-bus-route-detail.dto'

@Controller('bus-route-details')
export class BusRouteDetailsController {
    constructor(
        private readonly busRouteDetailsService: BusRouteDetailsService
    ) {}

    @Post()
    create(@Body() createBusRouteDetailDto: CreateBusRouteDetailDto) {
        return this.busRouteDetailsService.create(createBusRouteDetailDto)
    }

    @Get()
    findAll() {
        return this.busRouteDetailsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.busRouteDetailsService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateBusRouteDetailDto: UpdateBusRouteDetailDto
    ) {
        return this.busRouteDetailsService.update(+id, updateBusRouteDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.busRouteDetailsService.remove(+id)
    }
}

import { PageOptionsDto } from '@common/dtos'
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
import { BusRouteDetailsService } from './bus-route-details.service'
import { BusRouteDetailDto } from './dto/bus-route-detail.dto'
import { UpdateBusRouteDetailDto } from './dto/update-bus-route-detail.dto'

@ApiTags('bus-route-details')
@Controller('bus-route-details')
export class BusRouteDetailsController {
    constructor(
        private readonly busRouteDetailsService: BusRouteDetailsService
    ) {}

    @Post()
    create(@Body() createBusRouteDetailDto: BusRouteDetailDto) {
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
    @Get('findByAdmissionId/:id')
    findByAdmissionId(@Param('id') id: string) {
        return this.busRouteDetailsService.findByAdmissionId(id)
    }
    @Get('/pageable/studentdetails')
    getPageableBusrouteDetails(
        @Query('pagination') pagination?: PageOptionsDto
    ) {
        return this.busRouteDetailsService.getPageableBusRouteDetails(
            pagination
        )
    }

    @Post('/pageable/studentdetails')
    getPageBusrouteDetails(@Body() pageOptions: PageOptionsDto) {
        return this.busRouteDetailsService.getPageableBusRouteDetails(
            pageOptions
        )
    }
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateBusRouteDetailDto: UpdateBusRouteDetailDto
    ) {
        return this.busRouteDetailsService.update(id, updateBusRouteDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.busRouteDetailsService.remove(+id)
    }
}

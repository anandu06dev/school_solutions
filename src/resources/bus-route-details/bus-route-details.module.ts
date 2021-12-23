import { Module } from '@nestjs/common'
import { BusRouteDetailsService } from './bus-route-details.service'
import { BusRouteDetailsController } from './bus-route-details.controller'

@Module({
    controllers: [BusRouteDetailsController],
    providers: [BusRouteDetailsService],
})
export class BusRouteDetailsModule {}

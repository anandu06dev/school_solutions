import { Module } from '@nestjs/common'
import { BusRouteDetailsService } from './bus-route-details.service'
import { BusRouteDetailsController } from './bus-route-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BusRouteDetails } from './entities/bus-route-detail.entity'

@Module({
    imports: [TypeOrmModule.forFeature([BusRouteDetails])],
    controllers: [BusRouteDetailsController],
    providers: [BusRouteDetailsService],
})
export class BusRouteDetailsModule {}

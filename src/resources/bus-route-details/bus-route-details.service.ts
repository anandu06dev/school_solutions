import { Injectable } from '@nestjs/common'
import { CreateBusRouteDetailDto } from './dto/create-bus-route-detail.dto'
import { UpdateBusRouteDetailDto } from './dto/update-bus-route-detail.dto'

@Injectable()
export class BusRouteDetailsService {
    create(createBusRouteDetailDto: CreateBusRouteDetailDto) {
        return 'This action adds a new busRouteDetail'
    }

    findAll() {
        return `This action returns all busRouteDetails`
    }

    findOne(id: number) {
        return `This action returns a #${id} busRouteDetail`
    }

    update(id: number, updateBusRouteDetailDto: UpdateBusRouteDetailDto) {
        return `This action updates a #${id} busRouteDetail`
    }

    remove(id: number) {
        return `This action removes a #${id} busRouteDetail`
    }
}

import { BusRouteDetailDto } from './bus-route-detail.dto'

export class BusRouteDetailDtoConfig extends BusRouteDetailDto {
    constructor() {
        super()
        return {
            busRouteCode: null,
            busRouteNo: null,
            busRouteDriverName: null,
            busRouteDriverNo: null,
            busRouteInchargeName: null,
            busRouteInchargeNo: null,
            busRouteInsDtl: null,
        }
    }
}

import { BusRouteDetailDto } from './bus-route-detail.dto'

export class BusRouteDetailDtoConfig extends BusRouteDetailDto {
    constructor() {
        super()
        return {
            busRouteCode: super.busRouteCode,
            busRouteNo: super.busRouteNo,
            busRouteDriverName: super.busRouteDriverName,
            busRouteDriverNo: super.busRouteDriverNo,
            busRouteInchargeName: super.busRouteInchargeName,
            busRouteInchargeNo: super.busRouteInchargeNo,
            busRouteInsDtl: super.busRouteInsDtl,
        }
    }
}

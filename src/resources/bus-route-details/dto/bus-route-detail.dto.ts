import { IsNotEmpty } from 'class-validator'

export class BusRouteDetailDto {
    admissionNo?: number
    @IsNotEmpty()
    busRouteCode?: number
    @IsNotEmpty()
    busRouteNo?: string
    @IsNotEmpty()
    busRouteDriverName?: string
    @IsNotEmpty()
    busRouteDriverNo?: number
    @IsNotEmpty()
    busRouteInchargeName?: string
    @IsNotEmpty()
    busRouteInchargeNo?: number
    @IsNotEmpty()
    busRouteInsDtl?: string
}

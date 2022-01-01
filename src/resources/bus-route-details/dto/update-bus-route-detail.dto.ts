import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class UpdateBusRouteDetailDto {
    @ApiProperty({
        example: '1234',
        type: 'text',
        description: 'Describes about admissionNo',
    })
    @IsNotEmpty()
    admissionNo: number
    @ApiProperty({
        example: '123123213213-213213123-safsaf',
        type: 'text',
        description: 'Describes about id/unique id',
    })
    @IsNotEmpty()
    id: string
    @ApiProperty({
        example: '33',
        type: 'number',
        description: 'Describes about Bus RouteCode',
    })
    @IsNotEmpty()
    busRouteCode?: number
    @ApiProperty({
        example: '1',
        type: 'number',
        description: 'Describes about Bus RouteNo',
    })
    @IsNotEmpty()
    busRouteNo?: string
    @ApiProperty({
        example: 'Driver Name',
        type: 'string',
        description: 'Describes about Bus Route DriverName',
    })
    @IsNotEmpty()
    busRouteDriverName?: string
    @ApiProperty({
        example: '2343333233',
        type: 'number',
        description: 'Describes about Bus Route DriverNo',
    })
    @IsNotEmpty()
    busRouteDriverNo?: number
    @ApiProperty({
        example: 'Test Name',
        type: 'string',
        description: 'Describes about Bus Route Incharge Name',
    })
    @IsNotEmpty()
    busRouteInchargeName?: string
    @ApiProperty({
        example: '99999999999',
        type: 'number',
        description: 'Describes about Bus Route Incharge Phone No',
    })
    @IsNotEmpty()
    busRouteInchargeNo?: number
    @ApiProperty({
        example: '23-12-2019',
        type: 'string',
        description: 'Describes about Bus Route Incharge Detail',
    })
    @IsNotEmpty()
    busRouteInsDtl?: string
}

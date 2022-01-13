import { ApiProperty } from '@nestjs/swagger'
import { BusRouteDetails } from '@resources/bus-route-details/entities/bus-route-detail.entity'
import { FeesDetails } from '@resources/fees-details/entities/fees-detail.entity'
import { ParentDetails } from '@resources/parent-details/entities/parent-detail.entity'
import { SiblingDetails } from '@resources/sibling-details/entities/sibling-detail.entity'
import { StudentDetails } from '@resources/student-details/entities/student-detail.entity'
import { IsOptional } from 'class-validator'

export class Projection {
    @ApiProperty({
        example: '["studentFirstName","studentLastName","admissionNo"]',
        type: 'text',
        description: 'Describes about UserName',
    })
    @IsOptional()
    projectionId: string[]
    @ApiProperty({
        example: '1',
        type: 'text',
        description: 'Describes about UserName',
    })
    @IsOptional()
    isActive?: boolean
    @ApiProperty({
        example: '[1002,1004]',
        type: 'text',
        description: 'Describes about UserName',
    })
    @IsOptional()
    admissionId?: string[]
}

export type AllowedEntity =
    | StudentDetails
    | SiblingDetails
    | ParentDetails
    | FeesDetails
    | BusRouteDetails

export interface ICustomQueryBuilder {
    primaryJoin?: string
    where?: IWhere[]
    queryJoin?: string[]
}

export interface IWhere {
    condition?: string
    params?: IParams
}

export interface IParams {
    [key: string]: string | number | string[] | number[]
}

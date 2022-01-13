import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { BusRouteDetails } from '@resources/bus-route-details/entities/bus-route-detail.entity'
import { FeesDetails } from '@resources/fees-details/entities/fees-detail.entity'
import { ParentDetails } from '@resources/parent-details/entities/parent-detail.entity'
import { SiblingDetails } from '@resources/sibling-details/entities/sibling-detail.entity'
import { StudentDetails } from '@resources/student-details/entities/student-detail.entity'
import { Transform, Type } from 'class-transformer'
import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    Max,
    Min,
} from 'class-validator'
import { trace } from 'console'
import { JoinProjection, Order } from '../constants'

export class QueryPageOptionsDto {
    @ApiPropertyOptional({ enum: Order, default: Order.ASC })
    @IsEnum(Order)
    @IsOptional()
    readonly order?: Order = Order.ASC

    @ApiPropertyOptional({
        minimum: 1,
        default: 1,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @IsOptional()
    readonly page?: number = 1

    @ApiPropertyOptional({
        minimum: 1,
        maximum: 50,
        default: 10,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(50)
    @IsOptional()
    readonly take?: number = 10

    get skip(): number {
        return (this.page - 1) * this.take
    }

    @ApiPropertyOptional({
        default: false,
    })
    @Type(() => String)
    @IsOptional()
    @IsNotEmpty()
    showStudentDetails: string

    @ApiPropertyOptional({
        minimum: 1,
        default: '1,2',
    })
    @Type(() => String)
    @IsOptional()
    readonly aid: string

    @ApiProperty({
        enum: [
            JoinProjection.SIBLINGS,
            JoinProjection.PARENTS,
            JoinProjection.FEES,
            JoinProjection.BUS_ROUTE_DETAILS,
            JoinProjection.ADDRESSES,
        ],
        default: [JoinProjection.SIBLINGS, JoinProjection.PARENTS],
        isArray: true,
    })
    @IsOptional()
    readonly join: string[] = [JoinProjection.SIBLINGS, JoinProjection.PARENTS]

    @ApiPropertyOptional({
        minimum: 1,
        default:
            'c7409a8e-f507-4a77-98a0-fca2ed08adf4,c7409a8e-f507-4a77-98a0-fca2ed08adf4',
    })
    @Type(() => String)
    @IsOptional()
    readonly uniqueId: string
}

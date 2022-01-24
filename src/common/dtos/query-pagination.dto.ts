import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    Max,
    Min,
} from 'class-validator'
import {
    JoinProjection,
    Order,
    OrderByFields,
    RecordStatus,
} from '../constants'

export class BaseQueryPageOptionsDto {
    @ApiPropertyOptional({
        enum: Order,
        default: Order.ASC,
        description: 'Describes about Order',
    })
    @IsEnum(Order)
    @IsOptional()
    readonly order?: Order = Order.ASC

    @ApiPropertyOptional({
        enum: OrderByFields,
        default: 'createdTimeStamp',
        description: 'Describes about Order By Created Time Stamp',
    })
    @IsEnum(OrderByFields)
    @IsOptional()
    readonly orderByField?: OrderByFields = OrderByFields.CREATED_TIME_STAMP

    @ApiPropertyOptional({
        minimum: 1,
        default: 1,
        description: 'Describes about Page',
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @IsOptional()
    readonly page?: number = 1

    @ApiPropertyOptional({
        minimum: 1,
        maximum: 1000,
        default: 10,
        description: 'Describes about no of records',
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(1000)
    @IsOptional()
    readonly take?: number = 10

    get skip(): number {
        return (this.page - 1) * this.take
    }

    @ApiPropertyOptional({
        minimum: 1,
        default: '1,2',
        description: 'Describes about AdmissionIds',
    })
    @Type(() => String)
    @IsOptional()
    readonly aid: string

    @ApiPropertyOptional({
        enum: RecordStatus,
        default: RecordStatus.IsActive,
        description: 'Describes about Record Status',
    })
    @IsEnum(RecordStatus)
    @IsOptional()
    readonly activeRecords?: RecordStatus = RecordStatus.IsActive

    @ApiPropertyOptional({
        default: false,
        description:
            'Describes about multiple relations/join , This is directly linked to the join key',
    })
    @Type(() => String)
    @IsOptional()
    @IsNotEmpty()
    show: string

    @ApiPropertyOptional({
        minimum: 1,
        default:
            'c7409a8e-f507-4a77-98a0-fca2ed08adf4,c7409a8e-f507-4a77-98a0-fca2ed08adf4',
        description: 'Describes about UniqueId of the entity',
    })
    @Type(() => String)
    @IsOptional()
    readonly uniqueId: string
}

export class StudentQueryPageOptionsDto extends BaseQueryPageOptionsDto {
    @ApiPropertyOptional({
        enum: [
            JoinProjection.SIBLINGS,
            JoinProjection.PARENTS,
            JoinProjection.FEES,
            JoinProjection.BUS_ROUTE_DETAILS,
            JoinProjection.ADDRESSES,
        ],
        default: [JoinProjection.SIBLINGS, JoinProjection.PARENTS],
        isArray: true,
        required: false,
        description: 'Describes about JoinProjection , linked with the show',
    })
    @IsOptional()
    readonly join: string[] = [JoinProjection.SIBLINGS, JoinProjection.PARENTS]

    @ApiProperty({
        enum: [JoinProjection.STUDENT_DETAILS],
        default: JoinProjection.STUDENT_DETAILS,
        isArray: false,
        readOnly: true,
        required: true,
        description: 'Describes about Join Projection',
    })
    @Type(() => String)
    @IsOptional()
    readonly primaryJoin: string
}

export class SiblingQueryPageOptionsDto extends BaseQueryPageOptionsDto {
    @ApiProperty({
        enum: [JoinProjection.STUDENT_DETAILS],
        default: JoinProjection.STUDENT_DETAILS,
        isArray: false,
        required: true,
        description: 'Describes about Join Projection',
    })
    @Type(() => String)
    @IsOptional()
    readonly primaryJoin: string
    @ApiPropertyOptional({
        enum: [JoinProjection.SIBLINGS],
        default: JoinProjection.SIBLINGS,
        required: true,
        isArray: false,
        description: 'Describes about JoinProjection , linked with the show',
    })
    @Type(() => String)
    @IsOptional()
    readonly join: string[] = [JoinProjection.SIBLINGS]
}

export class ParentQueryPageOptionsDto extends BaseQueryPageOptionsDto {
    @ApiProperty({
        enum: [JoinProjection.STUDENT_DETAILS],
        default: JoinProjection.STUDENT_DETAILS,
        isArray: false,
        required: true,
        description: 'Describes about Join Projection',
    })
    @Type(() => String)
    @IsOptional()
    readonly primaryJoin: string
    @ApiPropertyOptional({
        enum: [JoinProjection.PARENTS],
        default: JoinProjection.PARENTS,
        required: true,
        isArray: false,
        description: 'Describes about JoinProjection , linked with the show',
    })
    @Type(() => String)
    @IsOptional()
    readonly join: string[] = [JoinProjection.PARENTS]
}

export class FeesDetailQueryPageOptionsDto extends BaseQueryPageOptionsDto {
    @ApiProperty({
        enum: [JoinProjection.STUDENT_DETAILS],
        default: JoinProjection.STUDENT_DETAILS,
        isArray: false,
        required: true,
        description: 'Describes about Join Projection',
    })
    @Type(() => String)
    @IsOptional()
    readonly primaryJoin: string
    @ApiPropertyOptional({
        enum: [JoinProjection.FEES],
        default: JoinProjection.FEES,
        required: true,
        isArray: false,
        description: 'Describes about JoinProjection , linked with the show',
    })
    @Type(() => String)
    @IsOptional()
    readonly join: string[] = [JoinProjection.FEES]
}

export class BusRouteQueryPageOptionsDto extends BaseQueryPageOptionsDto {
    @ApiProperty({
        enum: [JoinProjection.STUDENT_DETAILS],
        default: JoinProjection.STUDENT_DETAILS,
        isArray: false,
        required: true,
        description: 'Describes about Join Projection',
    })
    @Type(() => String)
    @IsOptional()
    readonly primaryJoin: string
    @ApiPropertyOptional({
        enum: [JoinProjection.BUS_ROUTE_DETAILS],
        default: JoinProjection.BUS_ROUTE_DETAILS,
        required: true,
        isArray: false,
        description: 'Describes about JoinProjection , linked with the show',
    })
    @Type(() => String)
    @IsOptional()
    readonly join: string[] = [JoinProjection.BUS_ROUTE_DETAILS]
}

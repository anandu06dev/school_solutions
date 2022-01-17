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
        maximum: 50,
        default: 10,
        description: 'Describes about no of records',
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
        enum: RecordStatus,
        default: RecordStatus.IsActive,
        description: 'Describes about Record Status',
    })
    @IsEnum(RecordStatus)
    @IsOptional()
    readonly activeRecords?: RecordStatus = RecordStatus.IsActive
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

    @ApiPropertyOptional({
        minimum: 1,
        default: '1,2',
        description: 'Describes about AdmissionIds',
    })
    @Type(() => String)
    @IsOptional()
    readonly aid: string

    @ApiPropertyOptional({
        default: false,
        description: 'Describes about multiple relations/join',
    })
    @Type(() => String)
    @IsOptional()
    @IsNotEmpty()
    getOtherDetails: string

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
        description: 'Describes about JoinProjection',
    })
    @IsOptional()
    readonly join: string[] = [JoinProjection.SIBLINGS, JoinProjection.PARENTS]

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

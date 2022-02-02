import { JoinProjection } from '@common/constants'
import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class CreateorUpdateUserRoleDto {
    @ApiProperty({
        example: '123213-12312-213213',
        type: 'text',
        description: 'Describes about Role Id',
    })
    @IsNotEmpty()
    roleId?: string
    @ApiProperty({
        example: 'userId',
        type: 'text',
        description: 'Describes about User ID',
    })
    @IsNotEmpty()
    userId?: string
    @ApiProperty({
        example: 'A',
        type: 'longtext',
        description: 'Describes about Role Access',
    })
    @IsNotEmpty()
    @Transform((value) => {
        return JSON.stringify(value.value)
    })
    roleAccess?: string

    @ApiProperty({
        example: 'ADMIN',
        type: 'text',
        description: 'Describes about Role Name',
    })
    @IsNotEmpty()
    roleName: string

    @ApiProperty({
        enum: [
            JoinProjection.SIBLINGS,
            JoinProjection.PARENTS,
            JoinProjection.FEES,
            JoinProjection.BUS_ROUTE_DETAILS,
            JoinProjection.ADDRESSES,
        ],
        default: [JoinProjection.SIBLINGS].toString(),
        isArray: true,
        required: false,
        description: 'Describes about Left Menu Access',
    })
    @IsOptional()
    @Transform((value) => {
        return value.value.toString()
    })
    leftMenuAcess: string = [JoinProjection.SIBLINGS].toString()
}

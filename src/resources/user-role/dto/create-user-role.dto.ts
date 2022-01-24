import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'

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
}

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUserRoleDto {
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
        type: 'text',
        description: 'Describes about Role Access',
    })
    @IsNotEmpty()
    roleAccess?: JSON
}

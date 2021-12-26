import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator'
import { UserEntity } from '../entities/user.entity'

export class CreateUserDto {
    @ApiProperty({
        example: 'userName',
        type: 'text',
        description: 'Describes about UserName',
    })
    @IsNotEmpty()
    username: string
    @ApiProperty({
        example: 'password',
        type: 'text',
        description: 'Describes about Password',
    })
    @IsNotEmpty()
    password: string
    @ApiProperty({
        example: 'email@schoolSolutions',
        type: 'email',
        description: 'Describes about Email',
    })
    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    email: string
}

export class UserDto {
    @ApiProperty({
        example: 'id',
        type: 'text',
        description: 'Describes about UniqueId Generated',
    })
    @IsNotEmpty()
    id: string
    @ApiProperty({
        example: 'userName',
        type: 'text',
        description: 'Describes about UserName',
    })
    @IsNotEmpty()
    username: string
    @ApiProperty({
        example: 'email@schoolSolutions',
        type: 'email',
        description: 'Describes about Email',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string
}

export class LoginUserDto {
    @IsNotEmpty() readonly username: string
    @IsNotEmpty() readonly password: string
}

export const toUserDto = (data: UserEntity): UserDto => {
    const { id, username, email } = data
    const userDto: UserDto = { id, username, email }
    return userDto
}

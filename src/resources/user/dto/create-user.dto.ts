import { IsNotEmpty, IsEmail } from 'class-validator'
import { UserEntity } from '../entities/user.entity'

export class CreateUserDto {
    @IsNotEmpty() username: string
    @IsNotEmpty() password: string
    @IsNotEmpty() @IsEmail() email: string
}

export class UserDto {
    @IsNotEmpty() id: string
    @IsNotEmpty() username: string
    @IsNotEmpty() @IsEmail() email: string
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

import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import {
    CreateUserDto,
    LoginUserDto,
    UserDto,
} from '@resources/user/dto/create-user.dto'
import { UserService } from '@resources/user/user.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { JwtPayload, LoginStatus } from './jwt.interface'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService
    ) {}

    create(createAuthDto: CreateAuthDto) {
        return 'This action adds a new auth'
    }
    async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
        let status: RegistrationStatus = {
            success: true,
            message: 'user registered',
        }
        try {
            await this.usersService.create(userDto)
        } catch (err) {
            status = {
                success: false,
                message: err,
            }
        }
        return status
    }

    findAll() {
        return `This action returns all auth`
    }

    findOne(id: number) {
        return `This action returns a #${id} auth`
    }

    update(id: number, updateAuthDto: UpdateAuthDto) {
        return `This action updates a #${id} auth`
    }

    async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
        // find user in db
        console.log(loginUserDto)
        const user = await this.usersService.findByLogin(loginUserDto)

        // generate and sign token
        const token = this._createToken(user)

        return {
            username: user.username,
            ...token,
        }
    }

    private _createToken({ username }: UserDto): any {
        const user: JwtPayload = { username }
        const accessToken = this.jwtService.sign(user)
        return {
            accessToken,
        }
    }

    async validateUser(payload: JwtPayload): Promise<UserDto> {
        const user = await this.usersService.findByPayload(payload)
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
        }
        return user
    }
}

export interface RegistrationStatus {
    success: boolean
    message: string
}

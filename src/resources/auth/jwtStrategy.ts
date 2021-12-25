import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { UserDto } from '@resources/user/dto/create-user.dto'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthService } from './auth.service'
import { JwtPayload } from './jwt.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRETKEY,
        })
    }

    async validate(payload: JwtPayload): Promise<UserDto> {
        const user = await this.authService.validateUser(payload)
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED)
        }
        return user
    }
}

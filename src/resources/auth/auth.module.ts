import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '@resources/user/user.module'
import { JwtStrategy } from './jwtStrategy'

@Module({
    imports: [
        UserModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: process.env.SECRETKEY,
            signOptions: {
                expiresIn: process.env.EXPIRESIN,
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [PassportModule, JwtModule],
})
export class AuthModule {}

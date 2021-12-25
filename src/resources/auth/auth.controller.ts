import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpException,
    HttpStatus,
} from '@nestjs/common'
import {
    CreateUserDto,
    LoginUserDto,
} from '@resources/user/dto/create-user.dto'
import { AuthService, RegistrationStatus } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { LoginStatus } from './jwt.interface'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    public async register(
        @Body() createUserDto: CreateUserDto
    ): Promise<RegistrationStatus> {
        const result: RegistrationStatus = await this.authService.register(
            createUserDto
        )
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST)
        }
        return result
    }
    @Post('login')
    public async login(
        @Body() loginUserDto: LoginUserDto
    ): Promise<LoginStatus> {
        console.log('loginUserDto', loginUserDto)
        return await this.authService.login(loginUserDto)
    }

    @Post()
    create(@Body() createAuthDto: CreateAuthDto) {
        return this.authService.create(createAuthDto)
    }

    @Get()
    findAll() {
        return this.authService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
        return this.authService.update(+id, updateAuthDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        //  return this.authService.remove(+id)
    }
}

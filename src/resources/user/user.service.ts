import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import {
    CreateUserDto,
    LoginUserDto,
    toUserDto,
    UserDto,
} from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>
    ) {}

    findAll() {
        return `This action returns all user`
    }

    async findOne(options?: object): Promise<UserDto> {
        const user = await this.userRepo.findOne(options)
        return toUserDto(user)
    }

    async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
        console.log('test', { username, password })
        const user = await this.userRepo.findOne({ where: { username } })
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED)
        }

        // compare passwords
        const areEqual = user.password === password ? true : false

        if (!areEqual) {
            throw new HttpException(
                'Invalid credentials',
                HttpStatus.UNAUTHORIZED
            )
        }
        console.log('toUserDto(user)', toUserDto(user))
        return toUserDto(user)
    }

    async findByPayload({ username }: any): Promise<UserDto> {
        return await this.findOne({
            where: { username },
        })
    }

    async create(userDto: CreateUserDto): Promise<UserDto> {
        const { username, password, email } = userDto

        // check if the user exists in the db
        const userInDb = await this.userRepo.findOne({
            where: { username },
        })
        if (userInDb) {
            throw new HttpException(
                'User already exists',
                HttpStatus.BAD_REQUEST
            )
        }

        const user: UserEntity = await this.userRepo.create({
            username,
            password,
            email,
        })
        await this.userRepo.save(user)
        return toUserDto(user)
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: number) {
        return `This action removes a #${id} user`
    }
}

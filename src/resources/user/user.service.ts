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
import * as bcrypt from 'bcrypt'
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>
    ) {}

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepo.find({
            relations: ['userRole'],
        })
    }

    async findOne(options?: object): Promise<UserDto> {
        const user = await this.userRepo.findOne(options)
        return toUserDto(user)
    }

    async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
        console.log('test', { username, password })
        const user = await this.userRepo.findOne({
            where: { username },
            relations: ['userRole'],
        })
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED)
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const isMatch = await bcrypt.compare(password, hashedPassword)
        console.log(hashedPassword, isMatch)
        // compare passwords
        // const areEqual = user.password === password ? true : false

        if (!isMatch) {
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
        try {
            const { username, password, email } = userDto
            const hashedPassword = await bcrypt.hash(password, 10)
            console.log('hashedPassword', hashedPassword, userDto)
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
                password: hashedPassword,
                email,
            })
            await this.userRepo.save(user)
            user.password = undefined
            return toUserDto(user)
        } catch (error) {
            if (error?.code === '400') {
                throw new HttpException(
                    'User with that email already exists',
                    HttpStatus.BAD_REQUEST
                )
            }
            throw new HttpException(
                'Something went wrong',
                HttpStatus.INTERNAL_SERVER_ERROR
            )
        }
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: number) {
        return `This action removes a #${id} user`
    }
}

import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { GET_ALL_DTO } from '@resources/resources-util/resource-dto-all'
import {
    initRolesRules,
    LookForId,
} from '@resources/resources-util/resource-query-util'
import { StudentDetailDto } from '@resources/student-details/dto/student-detail.dto'
import { classToClass } from 'class-transformer'
import { Repository } from 'typeorm'
import { CreateorUpdateUserRoleDto } from './dto/create-user-role.dto'
import { UpdateUserRoleDto } from './dto/update-user-role.dto'
import { UserRole } from './entities/user-role.entity'

@Injectable()
export class UserRoleService {
    constructor(
        @InjectRepository(UserRole)
        private userRoleRepository: Repository<UserRole>
    ) {}
    async create(createUserRoleDto: CreateorUpdateUserRoleDto) {
        try {
            console.log(
                createUserRoleDto,
                JSON.stringify(createUserRoleDto.roleAccess)
            )
            return await this.userRoleRepository.save(createUserRoleDto)
        } catch (e) {
            console.log(e)
        }
    }

    async findAll() {
        return await this.userRoleRepository.find()
    }

    findOne(id: string) {
        return this.userRoleRepository.findOne({
            where: {
                ...LookForId(id),
            },
        })
    }

    async update(id: string, updateUserRoleDto: UpdateUserRoleDto) {
        const toUpdate = await this.userRoleRepository.findOne({
            where: {
                ...LookForId(id),
            },
        })
        if (!toUpdate) {
            throw new NotFoundException('User role is not found')
        }
        return this.userRoleRepository.update(id, updateUserRoleDto)
    }

    async remove(id: number) {
        return await this.userRoleRepository.delete(id)
    }
}

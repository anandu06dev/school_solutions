import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiTags } from '@nestjs/swagger'
import { GET_ALL_CONFIG_DTOS } from '@resources/resources-util/allDto'
@ApiTags('user-details')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.userService.findOne(+id)
    // }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id)
    }

    @Get('rolesRules')
    getRolesRules() {
        return initRolesRules(GET_ALL_CONFIG_DTOS, true)
    }
}

function initRolesRules(allDto, util = false) {
    const temp = JSON.parse(JSON.stringify(allDto))
    for (const table of Object.keys(temp))
        for (const column of Object.keys(temp[table])) {
            temp[table][column] = {
                access: {
                    read: false,
                    write: false,
                    update: false,
                    delete: false,
                },
            }
            if (util) {
                temp[table][column]['util'] = {
                    isOptional: false,
                }
            }
        }

    return temp
}

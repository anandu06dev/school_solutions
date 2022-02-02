import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { UserRoleService } from './user-role.service'
import { CreateorUpdateUserRoleDto } from './dto/create-user-role.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('user-role')
@Controller('user-role')
export class UserRoleController {
    constructor(private readonly userRoleService: UserRoleService) {}

    @Post()
    create(@Body() createUserRoleDto: CreateorUpdateUserRoleDto) {
        return this.userRoleService.create(createUserRoleDto)
    }

    @Get()
    findAll() {
        return this.userRoleService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userRoleService.findOne(id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateUserRoleDto: CreateorUpdateUserRoleDto
    ) {
        return this.userRoleService.update(id, updateUserRoleDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userRoleService.remove(+id)
    }
}

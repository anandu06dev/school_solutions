import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { ParentDetailsService } from './parent-details.service'
import { CreateParentDetailDto } from './dto/create-parent-detail.dto'
import { UpdateParentDetailDto } from './dto/update-parent-detail.dto'

@Controller('parent-details')
export class ParentDetailsController {
    constructor(private readonly parentDetailsService: ParentDetailsService) {}

    @Post()
    create(@Body() createParentDetailDto: CreateParentDetailDto) {
        return this.parentDetailsService.create(createParentDetailDto)
    }

    @Get()
    findAll() {
        return this.parentDetailsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.parentDetailsService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateParentDetailDto: UpdateParentDetailDto
    ) {
        return this.parentDetailsService.update(+id, updateParentDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.parentDetailsService.remove(+id)
    }
}

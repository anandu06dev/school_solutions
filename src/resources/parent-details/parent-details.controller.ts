import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ParentDetailDto } from './dto/parent-detail.dto'
import { ParentDetailsService } from './parent-details.service'

@ApiTags('parent-details')

@Controller('parent-details')
export class ParentDetailsController {
    constructor(private readonly parentDetailsService: ParentDetailsService) {}

    @Post()
    create(@Body() createParentDetailDto: ParentDetailDto) {
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
        @Body() updateParentDetailDto: ParentDetailDto
    ) {
        return this.parentDetailsService.update(+id, updateParentDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.parentDetailsService.remove(+id)
    }
}

import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { SiblingDetailsService } from './sibling-details.service'
import { CreateSiblingDetailDto } from './dto/create-sibling-detail.dto'
import { UpdateSiblingDetailDto } from './dto/update-sibling-detail.dto'

@Controller('sibling-details')
export class SiblingDetailsController {
    constructor(
        private readonly siblingDetailsService: SiblingDetailsService
    ) {}

    @Post()
    create(@Body() createSiblingDetailDto: CreateSiblingDetailDto) {
        return this.siblingDetailsService.create(createSiblingDetailDto)
    }

    @Get()
    findAll() {
        return this.siblingDetailsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.siblingDetailsService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateSiblingDetailDto: UpdateSiblingDetailDto
    ) {
        return this.siblingDetailsService.update(+id, updateSiblingDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.siblingDetailsService.remove(+id)
    }
}

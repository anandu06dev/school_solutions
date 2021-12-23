import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { FeesDetailsService } from './fees-details.service'
import { CreateFeesDetailDto } from './dto/create-fees-detail.dto'
import { UpdateFeesDetailDto } from './dto/update-fees-detail.dto'

@Controller('fees-details')
export class FeesDetailsController {
    constructor(private readonly feesDetailsService: FeesDetailsService) {}

    @Post()
    create(@Body() createFeesDetailDto: CreateFeesDetailDto) {
        return this.feesDetailsService.create(createFeesDetailDto)
    }

    @Get()
    findAll() {
        return this.feesDetailsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.feesDetailsService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateFeesDetailDto: UpdateFeesDetailDto
    ) {
        return this.feesDetailsService.update(+id, updateFeesDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.feesDetailsService.remove(+id)
    }
}

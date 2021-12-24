import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { FeesDetailDto } from './dto/fees-detail.dto'
import { FeesDetailsService } from './fees-details.service'

@Controller('fees-details')
export class FeesDetailsController {
    constructor(private readonly feesDetailsService: FeesDetailsService) {}

    @Post()
    create(@Body() createFeesDetailDto: FeesDetailDto) {
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
        @Body() updateFeesDetailDto: FeesDetailDto
    ) {
        return this.feesDetailsService.update(+id, updateFeesDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.feesDetailsService.remove(+id)
    }
}

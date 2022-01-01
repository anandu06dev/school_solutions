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
import { PostalRefDto } from './dto/create-postal-ref.dto'
import { PostalRefProjection } from './modal/postal-ref-projection'
import { PostalRefService } from './postal-ref.service'

@ApiTags('postal-ref')
@Controller('postal-ref')
export class PostalRefController {
    constructor(private readonly postalRefService: PostalRefService) {}

    @Post()
    create(@Body() createPostalRefDto: PostalRefDto) {
        return this.postalRefService.create(createPostalRefDto)
    }

    @Get()
    findAll() {
        return this.postalRefService.findAll()
    }

    @Post('findByProjection')
    findByProjection(@Body() postalRef: PostalRefProjection) {
        return this.postalRefService.findByProjection(postalRef)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postalRefService.findOne(+id)
    }

    @Get('getAllState')
    getAllState() {
        return this.postalRefService.getAllState()
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePostalRefDto: PostalRefDto) {
        return this.postalRefService.update(+id, updatePostalRefDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postalRefService.remove(+id)
    }
}

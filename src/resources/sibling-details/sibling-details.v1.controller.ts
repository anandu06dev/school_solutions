import { SiblingQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { SiblingDetailDto } from './dto/sibling-detail.dto'
import { UpdateSiblingDetailDto } from './dto/update-sibling-detail.dto'
import { SiblingDetailsService } from './sibling-details.v1.service'

@ApiTags('/v1/sibling-details')
@Controller('/v1/sibling-details')
export class SiblingDetailsController {
    constructor(
        private readonly siblingDetailsService: SiblingDetailsService
    ) {}

    @Post()
    create(@Body() siblingDetailDto: SiblingDetailDto) {
        return this.siblingDetailsService.createorUpdate(siblingDetailDto)
    }

    @Get('/')
    getPageableGetStudentDetails(
        @Query() pageOptions?: SiblingQueryPageOptionsDto
    ) {
        return this.siblingDetailsService.getPageableSibDetails(pageOptions)
    }

    @Patch()
    update(@Body() updateSiblingDetailDto: UpdateSiblingDetailDto) {
        return this.siblingDetailsService.createorUpdate(updateSiblingDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.siblingDetailsService.remove(+id)
    }
}

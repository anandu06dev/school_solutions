import { ParentQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
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
import { ParentDetailDto } from './dto/parent-detail.dto'
import { UpdateParentDetailDto } from './dto/update-parent-detail.dto'
import { ParentDetailsService } from './parent-details.v1.service'

@ApiTags('parent-details')
// @UseGuards(AuthGuard())
@Controller('/v1/parent-details')
export class ParentDetailsController {
    constructor(private readonly parentDetailsService: ParentDetailsService) {}

    @Post()
    create(@Body() createParentDetailDto: ParentDetailDto) {
        return this.parentDetailsService.createorUpdate(createParentDetailDto)
    }

    @Get('/parentdetails')
    getPageableGetStudentDetails(
        @Query() pagination?: ParentQueryPageOptionsDto
    ) {
        return this.parentDetailsService.getPageable(pagination)
    }

    @Patch()
    update(@Body() updateParentDetailDto: UpdateParentDetailDto) {
        return this.parentDetailsService.createorUpdate(updateParentDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.parentDetailsService.remove(+id)
    }
}

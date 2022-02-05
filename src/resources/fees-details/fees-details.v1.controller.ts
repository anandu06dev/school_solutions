import { FeesDetailQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
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
import { FeesDetailDto } from './dto/fees-detail.dto'
import { UpdateFeesDetailDto } from './dto/update-fees-detail.dto'
import { FeesDetailsService } from './fees-details.v1.service'

@ApiTags('/v1/fees-details')
// @UseGuards(AuthGuard())
@Controller('/v1/fees-details')
export class FeesDetailsController {
    constructor(private readonly feesDetailsService: FeesDetailsService) {}

    @Post()
    create(@Body() createFeesDetailDto: FeesDetailDto) {
        return this.feesDetailsService.createorUpdate(createFeesDetailDto)
    }

    @Get('/')
    getPageableFeeDetails(
        @Query('pagination') pagination?: FeesDetailQueryPageOptionsDto
    ) {
        return this.feesDetailsService.getPageable(pagination)
    }

    @Patch()
    update(@Body() updateFeesDetailDto: UpdateFeesDetailDto) {
        return this.feesDetailsService.createorUpdate(updateFeesDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.feesDetailsService.remove(+id)
    }
}

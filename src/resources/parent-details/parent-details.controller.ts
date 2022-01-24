import { PageOptionsDto } from '@common/dtos'
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

    @Get('findByAdmissionId/:id')
    findByAdmissionId(@Param('id') id: string) {
        return this.parentDetailsService.findByAdmissionId(id)
    }

    @Get('/pageable/parentdetails')
    getPageableGetStudentDetails(@Query() pagination?: PageOptionsDto) {
        return this.parentDetailsService.getPageableParentDetails(pagination)
    }

    @Post('/pageable/parentdetails')
    getPageableStudentDetails(@Body() pageOptions: PageOptionsDto) {
        return this.parentDetailsService.getPageableParentDetails(pageOptions)
    }
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateParentDetailDto: UpdateParentDetailDto
    ) {
        return this.parentDetailsService.update(id, updateParentDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.parentDetailsService.remove(+id)
    }
}

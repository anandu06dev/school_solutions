import { BaseQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
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
import { SiblingDetailsService } from './sibling-details.service'

@ApiTags('sibling-details')
@Controller('sibling-details')
export class SiblingDetailsController {
    constructor(
        private readonly siblingDetailsService: SiblingDetailsService
    ) {}

    @Post()
    create(@Body() siblingDetailDto: SiblingDetailDto) {
        return this.siblingDetailsService.create(siblingDetailDto)
    }

    @Get('findByAdmissionId/:id')
    findByAdmissionId(@Param('id') id: string) {
        return this.siblingDetailsService.findByAdmissionId(id)
    }

    @Get('findByAllSibDetails')
    findByAllSibDetails() {
        return this.siblingDetailsService.findByAllSibDetails()
    }
    @Get()
    findAll() {
        return this.siblingDetailsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.siblingDetailsService.findOne(+id)
    }

    @Get('/pageable/siblingdetails')
    getPageableGetStudentDetails(
        @Query('pagination') pagination?: BaseQueryPageOptionsDto
    ) {
        return this.siblingDetailsService.getPageableSibDetails(pagination)
    }

    @Post('/pageable/siblingdetails')
    getPageableStudentDetails(@Body() pageOptions: BaseQueryPageOptionsDto) {
        return this.siblingDetailsService.getPageableSibDetails(pageOptions)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateSiblingDetailDto: UpdateSiblingDetailDto
    ) {
        return this.siblingDetailsService.update(id, updateSiblingDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.siblingDetailsService.remove(+id)
    }
}

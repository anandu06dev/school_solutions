import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ValidationPipe,
    Query,
} from '@nestjs/common'
import { StudentDetailsService } from './student-details.service'
import { StudentDetailDto } from './dto/student-detail.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Projection } from '@resources/resource-model/resource.model'
import { UpdateStudentDetailDto } from './dto/update-student-detail.dto'
import { DeleteStudentDetailDto } from './dto/delete-student-detail.dto'
import { StudentQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
@ApiTags('student-details')
@ApiBearerAuth()
// @UseGuards(AuthGuard())
@Controller('student-details')
export class StudentDetailsController {
    constructor(
        private readonly studentDetailsService: StudentDetailsService
    ) {}

    @Post()
    create(@Body() createStudentDetailDto: StudentDetailDto) {
        console.log(createStudentDetailDto)
        return this.studentDetailsService.create(createStudentDetailDto)
    }

    @Post('/findByProjection')
    findByProjection(@Body() projection: Projection) {
        console.log(projection)
        return this.studentDetailsService.findByProjection(projection)
    }

    @Post('/findByProjectionId')
    findByProjectionId(@Body() projection: Projection) {
        console.log(projection)
        return this.studentDetailsService.findByProjectionByIdAndActive(
            projection
        )
    }

    @Get()
    findAll() {
        return this.studentDetailsService.findAll()
    }

    @Get('/pageable/studentdetails')
    getPageableGetStudentDetails(
        @Query() pagination?: StudentQueryPageOptionsDto
    ) {
        console.log('pagination $$$$$$$$$$$$$$$$$44', pagination)
        return this.studentDetailsService.getPageableStudents(pagination)
    }

    @Post('/pageable/studentdetails')
    getPageableStudentDetails(@Body() pageOptions: StudentQueryPageOptionsDto) {
        return this.studentDetailsService.getPageableStudents(pageOptions)
    }

    @Get('/findByIdandActive/:id')
    findByIdAndIsActive(@Param('id') id: string) {
        return this.studentDetailsService.findByIdAndIsActive(+id)
    }

    @Get('/searchByName/:name')
    searchByStudentFirstName(@Param('name') name: string) {
        return this.studentDetailsService.searchByStudentFirstName(name)
    }

    @Get('/findByAll')
    findByAll() {
        return this.studentDetailsService.findByAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentDetailsService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body(new ValidationPipe()) studentDetails: UpdateStudentDetailDto
    ) {
        console.log(studentDetails, id)
        return this.studentDetailsService.update(+id, studentDetails)
    }

    @Delete(':id')
    remove(
        @Param('id') id: string,
        @Body() deletestudentDetails: DeleteStudentDetailDto
    ) {
        return this.studentDetailsService.updateStudentStatus(
            +id,
            deletestudentDetails
        )
    }
}

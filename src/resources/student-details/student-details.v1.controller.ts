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
import { StudentDetailsService } from './student-details.v1.service'
import { StudentDetailDto } from './dto/student-detail.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { UpdateStudentDetailDto } from './dto/update-student-detail.dto'
import { DeleteStudentDetailDto } from './dto/delete-student-detail.dto'
import { StudentQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
@ApiTags('student-details')
@ApiBearerAuth()
// @UseGuards(AuthGuard())
@Controller('/v1/student-details')
export class StudentDetailsController {
    constructor(
        private readonly studentDetailsService: StudentDetailsService
    ) {}

    @Post()
    create(@Body() createStudentDetailDto: StudentDetailDto) {
        console.log(createStudentDetailDto)
        return this.studentDetailsService.createorUpdate(createStudentDetailDto)
    }

    @Get('/studentdetails')
    getPageableGetStudentDetails(
        @Query() pagination?: StudentQueryPageOptionsDto
    ) {
        console.log('pagination $$$$$$$$$$$$$$$$$44', pagination)
        return this.studentDetailsService.getPageableStudents(pagination)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body(new ValidationPipe()) studentDetails: UpdateStudentDetailDto
    ) {
        console.log(studentDetails, id)
        return this.studentDetailsService.createorUpdate(studentDetails)
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

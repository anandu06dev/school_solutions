import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { StudentDetailsService } from './student-details.service'
import { StudentDetailDto } from './dto/student-detail.dto'
import { Projection } from '@resources/resource-model/resource.model'

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
    update(@Param('id') id: string, @Body() studentDetails: StudentDetailDto) {
        console.log(studentDetails, id)
        return this.studentDetailsService.update(+id, studentDetails)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.studentDetailsService.remove(+id)
    }
}

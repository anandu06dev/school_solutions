import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
    Query,
    ClassSerializerInterceptor,
    UseInterceptors,
} from '@nestjs/common'
import { CreateStudentDto } from '../dto/create-student.dto'
import { UpdateStudentDto } from '../dto/update-student.dto'
import { ApiTags } from '@nestjs/swagger'
import { StudentsService } from '../services/students.service'
import { ApiPaginatedResponse } from '@common/decorators'
import { PageOptionsDto, PageDto } from '@common/dtos'

@ApiTags('students')
@Controller('students')
@UseInterceptors(ClassSerializerInterceptor)
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiPaginatedResponse(UpdateStudentDto)
    async getUsers(
        @Query() pageOptionsDto: PageOptionsDto
    ): Promise<PageDto<UpdateStudentDto>> {
        return this.studentsService.getStudents(pageOptionsDto)
    }

    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentsService.create(createStudentDto)
    }

    // @Get()
    // findAll() {
    //     return this.studentsService.findAll()
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.studentsService.findOnlyRequestedId(id)
    // }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateStudentDto: UpdateStudentDto
    ) {
        return this.studentsService.update(+id, updateStudentDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.studentsService.remove(+id)
    }
}

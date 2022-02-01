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
    Header,
    HttpCode,
    HttpStatus,
    Res,
} from '@nestjs/common'
import { Response } from 'express'
import { StudentDetailsService } from './student-details.v1.service'
import { StudentDetailDto } from './dto/student-detail.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { UpdateStudentDetailDto } from './dto/update-student-detail.dto'
import { DeleteStudentDetailDto } from './dto/delete-student-detail.dto'
import { StudentQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { SCHOOL_SOLS } from '@utils/apiEnums'

@ApiTags('/v1/' + SCHOOL_SOLS.STUDENTDETAILS)
@ApiBearerAuth()
// @UseGuards(AuthGuard())
@Controller('/v1/' + SCHOOL_SOLS.STUDENTDETAILS)
export class StudentDetailsController {
    constructor(
        private readonly studentDetailsService: StudentDetailsService
    ) {}

    @Post()
    create(@Body() createStudentDetailDto: StudentDetailDto) {
        return this.studentDetailsService.createorUpdate(createStudentDetailDto)
    }

    @Get(`/`)
    getPageableGetStudentDetails(
        @Query() pagination?: StudentQueryPageOptionsDto
    ) {
        return this.studentDetailsService.getPageableStudents(pagination)
    }

    @Get('/generatePDF')
    @HttpCode(HttpStatus.OK)
    @Header('Content-Type', 'application/pdf')
    @Header('Content-Disposition', 'inline; filename=Bill.pdf')
    generatePDF(@Res() res: Response) {
        // const fonts = {
        //     Helvetica: {
        //         normal: 'Helvetica',
        //         bold: 'Helvetica-Bold',
        //         italics: 'Helvetica-Oblique',
        //         bolditalics: 'Helvetica-BoldOblique',
        //     },
        // }
        // const printer = new PdfPrinter(fonts)

        // const docDefinition = {
        //     content: [
        //         { text: 'Heading', fontSize: 25 },
        //         {
        //             layout: 'lightHorizontalLines', // optional
        //             table: {
        //                 headerRows: 1,
        //                 widths: ['*', 'auto', 100, '*'],

        //                 body: [
        //                     ['First', 'Second', 'Third', 'The last one'],
        //                     ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
        //                     ['Val 1', 'Val 2', 'Val 3', 'Val 4'],
        //                 ],
        //             },
        //         },
        //         {
        //             text: 'google',
        //             link: 'http://google.com',
        //             pageBreak: 'before',
        //         },
        //         { qr: 'text in QR', foreground: 'green', background: 'white' },
        //     ],
        //     defaultStyle: {
        //         font: 'Helvetica',
        //     },
        // }

        // const options = {}
        // const file_name = 'PDF' + generateRandomNumber(16) + '.pdf'
        // const pdfDoc = printer.createPdfKitDocument(docDefinition, options)
        // pdfDoc.pipe(fs.createWriteStream(file_name))
        // pdfDoc.end()
        // return { file_name: file_name }
        return this.studentDetailsService.genpdf(res)
    }

    @Patch()
    update(@Body(new ValidationPipe()) studentDetails: UpdateStudentDetailDto) {
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

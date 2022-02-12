import { StudentQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getPageableStudentsRepo } from '@resources/repository.module'
import upsert from '@resources/resources-util/resource-query-util'
import { Response } from 'express'
import { getCustomRepository, Repository } from 'typeorm'
import { StudentDetailRepository } from './customRepository/student-cstm-repository'
import { DeleteStudentDetailDto } from './dto/delete-student-detail.dto'
import { StudentDetailDto } from './dto/student-detail.dto'
import { StudentDetails } from './entities/student-detail.entity'
import * as fs from 'fs'
import * as PdfPrinter from 'pdfmake'
import { generateRandomNumber } from '@resources/resources-util/resource-query-util'
import { studentdetailBill } from './pdf-prototype/bill-format-1'
@Injectable()
export class StudentDetailsService {
    genpdf(response: Response<any, Record<string, any>>) {
        try {
            const fonts = {
                Helvetica: {
                    normal: 'Helvetica',
                    bold: 'Helvetica-Bold',
                    italics: 'Helvetica-Oblique',
                    bolditalics: 'Helvetica-BoldOblique',
                },
            }
            const printer = new PdfPrinter(fonts)

            const docDefinition = {
                content: [
                    { text: 'Tables', style: 'header' },
                    'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
                    {
                        text: 'A simple table (no headers, no width specified, no spans, no styling)',
                        style: 'subheader',
                    },
                    'The following table has nothing more than a body array',
                    {
                        style: 'tableExample',
                        table: {
                            body: [
                                ['Column 1', 'Column 2', 'Column 3'],
                                [
                                    'One value goes here',
                                    'Another one here',
                                    'OK?',
                                ],
                            ],
                        },
                        layout: {
                            fillColor: function (rowIndex, node, columnIndex) {
                                return rowIndex % 2 === 0 ? '#673ab7' : 'white'
                            },
                        },
                    },
                    {
                        qr: 'text in QR',
                        foreground: '#673ab7',
                        background: 'white',
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        color: '#673ab7',
                    },
                    bigger: {
                        fontSize: 15,
                        italics: true,
                    },
                },

                defaultStyle: {
                    columnGap: 20,
                    font: 'Helvetica',
                },
            }

            const options = {}

            const chunks = []
            const pdfDoc = printer.createPdfKitDocument(
                studentdetailBill,
                options
            )
            pdfDoc.on('data', (chunk) => chunks.push(chunk))
            pdfDoc.on('end', () => {
                const result = Buffer.concat(chunks)
                response.send(result)
            })
            pdfDoc.end()
        } catch (e) {
            console.log(e)
        }
    }
    studentCtsmRepository = getCustomRepository(StudentDetailRepository)

    constructor(
        @InjectRepository(StudentDetails)
        private studentRepository: Repository<StudentDetails>
    ) {}

    async createorUpdate(createStudentDetailDto: StudentDetailDto) {
        try {
            return await upsert(
                StudentDetails,
                createStudentDetailDto,
                'admissionNo'
            )
        } catch (e) {
            console.log(e)
        }
    }

    async getPageableStudents(
        pageOptionsDto: StudentQueryPageOptionsDto
    ): Promise<any> {
        return getPageableStudentsRepo(pageOptionsDto, this.studentRepository)
    }

    async updateStudentStatus(
        id: number,
        deleteStudentDetailDto: DeleteStudentDetailDto
    ) {
        try {
            const toUpdate = await this.studentRepository.findOne(id)
            console.log(toUpdate)
            if (!toUpdate) {
                throw new NotFoundException('Student is not found')
            }
            return this.studentRepository.update(id, deleteStudentDetailDto)
        } catch (e: unknown) {
            console.log(e)
        }
    }
}

// Helper Function many and count or raw , orderby , groupby

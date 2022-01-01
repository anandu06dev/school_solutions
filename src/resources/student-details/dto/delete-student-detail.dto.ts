import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class DeleteStudentDetailDto {
    @ApiProperty({
        example: '123234',
        type: 'text',
        description: 'Enter Admission no',
    })
    admissionNo: number
    @ApiProperty({
        example: '0',
        type: 'text',
        description: 'Enter studentIsActive - 0/1',
    })
    @IsNotEmpty()
    studentIsActive?: boolean
}

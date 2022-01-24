import { ApiProperty } from '@nestjs/swagger'
import { STUDENT_DTO } from '@resources/resources-util/resource-dto-all'
import { IsNotEmpty, IsOptional } from 'class-validator'
import { Timestamp } from 'typeorm'
/* 
Update : No Active field in student detail
Mandatory : AdmissionNo In GET Parameter

*/

export class UpdateStudentDetailDto {
    @IsNotEmpty()
    @ApiProperty({
        example: '1234',
        type: 'text',
        description: 'Describes about admissionNo',
    })
    admissionNo?: number
    @ApiProperty({
        example: '31-12-9999',
        type: 'text',
        description: 'Describes about AdmissionDate -dd/mm/yyyy',
    })
    @IsOptional()
    @IsNotEmpty()
    admissionDate?: Timestamp
    @ApiProperty({
        example: 'firstName',
        type: 'text',
        description: 'Describes about studentFirstName',
    })
    @IsOptional()
    @IsNotEmpty()
    studentFirstName?: string
    @ApiProperty({
        example: 'A',
        type: 'text',
        description: 'Describes about studentClass',
    })
    @IsOptional()
    @IsNotEmpty()
    studentClass?: string
    @ApiProperty({
        example: 'student Last Name',
        type: 'text',
        description: 'Describes about StudentLastName',
    })
    @IsOptional()
    @IsNotEmpty()
    studentLastName?: string
    @ApiProperty({
        example: 'Father Name',
        type: 'text',
        description: 'Describes about StudentFatherName',
    })
    @IsOptional()
    @IsNotEmpty()
    studentFatherName?: string
    @ApiProperty({
        example: 'MotherName',
        type: 'text',
        description: 'Describes about StudentMotherName',
    })
    @IsOptional()
    @IsNotEmpty()
    studentMotherName?: string
    @ApiProperty({
        example: 'M/F',
        type: 'text',
        description: 'Describes about StudentGender',
    })
    @IsOptional()
    @IsNotEmpty()
    studentGender?: string
    @ApiProperty({
        example: '31-12-1999',
        type: 'text',
        description: 'Describes about StudentDOB -dd-mm-yyyy',
    })
    @IsOptional()
    @IsNotEmpty()
    studentDOB?: Timestamp
    @ApiProperty({
        example: 'Abc',
        type: 'text',
        description: 'Describes about StudentCaste',
    })
    @IsOptional()
    @IsNotEmpty()
    studentCaste?: string
    @ApiProperty({
        example: 'Abc',
        type: 'text',
        description: 'Describes about studentSubCaste',
    })
    @IsOptional()
    @IsNotEmpty()
    studentSubCaste?: string
    @ApiProperty({
        example: 'Abc',
        type: 'text',
        description: 'Describes about StudentCommunity',
    })
    @IsOptional()
    @IsNotEmpty()
    studentCommunity?: string
    @ApiProperty({
        example: 'Hindu',
        type: 'text',
        description: 'Describes about StudentReligion',
    })
    @IsOptional()
    @IsNotEmpty()
    studentReligion?: string
    @ApiProperty({
        example: 'Indian',
        type: 'text',
        description: 'Describes about StudentNationality',
    })
    @IsOptional()
    @IsNotEmpty()
    studentNationality?: string
    @ApiProperty({
        example: 'Tamil',
        type: 'text',
        description: 'Describes about StudentMotherToungue',
    })
    @IsOptional()
    @IsNotEmpty()
    studentMotherToungue?: string
    @ApiProperty({
        example: 'English',
        type: 'text',
        description: 'Describes about StudentLangaugeKnown',
    })
    @IsOptional()
    @IsNotEmpty()
    studentLangaugeKnown?: string
    @ApiProperty({
        example: 'B+',
        type: 'text',
        description: 'Describes about StudentBloodGroup',
    })
    @IsOptional()
    @IsNotEmpty()
    studentBloodGroup?: string
    @ApiProperty({
        example: '1234-1234-1234-1234',
        type: 'text',
        description: 'Describes about StudentAadharNumber',
    })
    @IsOptional()
    @IsNotEmpty()
    studentAadharNumber?: string
    @ApiProperty({
        example: '6',
        type: 'text',
        description: 'Describes about StudentEMINo',
    })
    @IsOptional()
    @IsNotEmpty()
    studentEMINo?: string
    @ApiProperty({
        example: 'ABC SCHOOL',
        type: 'text',
        description: 'Describes about StudentPreviousSchool',
    })
    @IsOptional()
    @IsNotEmpty()
    studentPreviousSchool?: string
    @ApiProperty({
        example: '20',
        type: 'number',
        description: 'Describes about StudentDiscount',
    })
    @IsOptional()
    @IsNotEmpty()
    studentDiscount?: number

    public config() {
        return {
            ...STUDENT_DTO,
        }
    }
}

import { ApiProperty } from '@nestjs/swagger'
import { STUDENT_DTO } from '@resources/resources-util/resource-dto-all'
import { Expose } from 'class-transformer'
import { IsNotEmpty, IsObject, IsOptional } from 'class-validator'
import { Timestamp } from 'typeorm'

export class StudentDetailDto {
    admissionNo?: number
    @ApiProperty({
        example: '31-12-9999',
        type: 'text',
        description: 'Describes about AdmissionDate -dd/mm/yyyy',
    })
    @Expose()
    @IsNotEmpty()
    admissionDate?: Timestamp
    @ApiProperty({
        example: 'firstName',
        type: 'text',
        description: 'Describes about studentFirstName',
    })
    @IsNotEmpty()
    studentFirstName?: string
    @ApiProperty({
        example: 'A',
        type: 'text',
        description: 'Describes about studentClass',
    })
    @IsNotEmpty()
    studentClass?: string
    @ApiProperty({
        example: 'student Last Name',
        type: 'text',
        description: 'Describes about StudentLastName',
    })
    @IsNotEmpty()
    studentLastName?: string
    @ApiProperty({
        example: 'Father Name',
        type: 'text',
        description: 'Describes about StudentFatherName',
    })
    @IsNotEmpty()
    studentFatherName?: string
    @ApiProperty({
        example: 'MotherName',
        type: 'text',
        description: 'Describes about StudentMotherName',
    })
    @IsNotEmpty()
    studentMotherName?: string
    @ApiProperty({
        example: 'M/F',
        type: 'text',
        description: 'Describes about StudentGender',
    })
    @IsNotEmpty()
    studentGender?: string
    @ApiProperty({
        example: '31-12-1999',
        type: 'text',
        description: 'Describes about StudentDOB -dd-mm-yyyy',
    })
    @IsNotEmpty()
    studentDOB?: Timestamp
    @ApiProperty({
        example: 'Abc',
        type: 'text',
        description: 'Describes about StudentCaste',
    })
    @IsNotEmpty()
    studentCaste?: string
    @ApiProperty({
        example: 'Abc',
        type: 'text',
        description: 'Describes about studentSubCaste',
    })
    @IsNotEmpty()
    studentSubCaste?: string
    @ApiProperty({
        example: 'Abc',
        type: 'text',
        description: 'Describes about StudentCommunity',
    })
    @IsNotEmpty()
    studentCommunity?: string
    @ApiProperty({
        example: 'Hindu',
        type: 'text',
        description: 'Describes about StudentReligion',
    })
    @IsNotEmpty()
    studentReligion?: string
    @ApiProperty({
        example: 'Indian',
        type: 'text',
        description: 'Describes about StudentNationality',
    })
    @IsNotEmpty()
    studentNationality?: string
    @ApiProperty({
        example: 'Tamil',
        type: 'text',
        description: 'Describes about StudentMotherToungue',
    })
    @IsNotEmpty()
    studentMotherToungue?: string
    @ApiProperty({
        example: 'English',
        type: 'text',
        description: 'Describes about StudentLangaugeKnown',
    })
    @IsNotEmpty()
    studentLangaugeKnown?: string
    @ApiProperty({
        example: 'B+',
        type: 'text',
        description: 'Describes about StudentBloodGroup',
    })
    @IsNotEmpty()
    studentBloodGroup?: string
    @ApiProperty({
        example: '1234-1234-1234-1234',
        type: 'text',
        description: 'Describes about StudentAadharNumber',
    })
    @IsNotEmpty()
    studentAadharNumber?: string
    @ApiProperty({
        example: '6',
        type: 'text',
        description: 'Describes about StudentEMINo',
    })
    @IsNotEmpty()
    studentEMINo?: string
    @ApiProperty({
        example: 'ABC SCHOOL',
        type: 'text',
        description: 'Describes about StudentPreviousSchool',
    })
    @IsNotEmpty()
    studentPreviousSchool?: string
    @ApiProperty({
        example: '20',
        type: 'number',
        description: 'Describes about StudentDiscount',
    })
    @IsNotEmpty()
    studentDiscount?: number
    @ApiProperty({
        example: '1',
        type: 'booelan',
        description: 'Describes about StudentIsActive',
    })
    @IsOptional()
    studentIsActive?: boolean

    public config() {
        return {
            ...STUDENT_DTO,
        }
    }
}

import { ApiProperty } from '@nestjs/swagger'

import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { Gender, StudentCommunity } from '../enums/enum'

export class CreateStudentDto {
    @ApiProperty({
        example: '20-12-2021',
        type: 'date',
        description: 'Describes about admission date',
    })
    @IsDate()
    @IsNotEmpty()
    admissionDate: Date

    @ApiProperty({
        example: 'Ram',
        type: 'string',
        description: 'Describes about student first name',
    })
    @IsString()
    @IsNotEmpty()
    studentFirstName: string

    @ApiProperty({
        example: 'Ram',
        type: 'string',
        description: 'Describes about student last name',
    })
    @IsString()
    @IsNotEmpty()
    studentLastName: string

    @ApiProperty({
        example: 'Class',
        type: 'string',
        description: 'Describes about student current class',
    })
    @IsString()
    @IsNotEmpty()
    studentClass: string

    @ApiProperty({
        example: 'Ranga',
        type: 'string',
        description: "Describes about student's father name",
    })
    @IsString()
    @IsNotEmpty()
    studentFatherName: string

    @ApiProperty({
        example: 'Devi',
        type: 'string',
        description: "Describes about student's mother name",
    })
    @IsString()
    @IsNotEmpty()
    studentMotherName: string

    @ApiProperty({
        enum: Gender,
        enumName: 'Gender',
        example: 'Male',
        type: 'string',
        description:
            'Describe about student gender type such as male or female',
    })
    @IsString()
    @IsNotEmpty()
    @IsEnum(Gender)
    role: Gender

    @ApiProperty({
        example: '20-12-2021',
        type: 'date',
        description: 'Describes about student date of birth',
    })
    @IsDate()
    @IsNotEmpty()
    studentDOB: Date

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's caste name",
    })
    @IsString()
    @IsNotEmpty()
    studentCaste: string

    @ApiProperty({
        example: 'XXX',
        description: "Describes about student's sub caste name",
        enum: StudentCommunity,
        type: 'string',
        enumName: 'StudentCommunity',
    })
    @IsString()
    @IsNotEmpty()
    @IsEnum(StudentCommunity)
    studentCommunity: StudentCommunity

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's religion name",
    })
    @IsString()
    @IsNotEmpty()
    studentReligion: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's nationality name",
    })
    @IsString()
    @IsNotEmpty()
    studentNationality: string

    @ApiProperty({
        type: 'string',
        example: 'XXX',
        description: "Describes about student's mother tongue name",
    })
    @IsString()
    @IsNotEmpty()
    studentMotherTongue: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's mother tongue name",
    })
    @IsString()
    @IsNotEmpty()
    studentLanguageKnown: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's blood group name",
    })
    @IsString()
    @IsNotEmpty()
    studentBloodGroup: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's adhaar number",
    })
    @IsString()
    @IsNotEmpty()
    studentAadharNumber: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's EMI's  number",
    })
    @IsString()
    @IsNotEmpty()
    studentEMINumber: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's previous school",
    })
    @IsString()
    @IsNotEmpty()
    studentPreviousSchool: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's discount percentage",
    })
    @IsString()
    @IsNotEmpty()
    studentDiscount: string
}

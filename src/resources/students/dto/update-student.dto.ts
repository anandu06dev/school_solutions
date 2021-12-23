import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Gender, StudentCommunity } from '../enums/enum'
import {
    IsDate,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator'

export class UpdateStudentDto {
    @ApiPropertyOptional({
        example: '20-12-2021',
        type: 'date',
        description: 'Describes about admission date',
    })
    @IsDate()
    @IsNotEmpty()
    @IsOptional()
    admissionDate: Date

    @ApiPropertyOptional({
        example: 'Ram',
        type: 'string',
        description: 'Describes about student first name',
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentFirstName: string

    @ApiPropertyOptional({
        example: 'Ram',
        type: 'string',
        description: 'Describes about student last name',
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentLastName: string

    @ApiPropertyOptional({
        example: 'Class',
        type: 'string',
        description: 'Describes about student current class',
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentClass: string

    @ApiPropertyOptional({
        example: 'Ranga',
        type: 'string',
        description: "Describes about student's father name",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentFatherName: string

    @ApiPropertyOptional({
        example: 'Devi',
        type: 'string',
        description: "Describes about student's mother name",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentMotherName: string

    @ApiPropertyOptional({
        enum: Gender,
        enumName: 'Gender',
        example: 'Male',
        description:
            'Describe about student gender type such as male or female',
    })
    @IsNotEmpty()
    @IsOptional()
    @IsEnum(Gender)
    role: Gender

    @ApiPropertyOptional({
        example: '20-12-2021',
        type: 'date',
        description: 'Describes about student date of birth',
    })
    @IsDate()
    @IsNotEmpty()
    @IsOptional()
    studentDOB: Date

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's caste name",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentCaste: string

    @ApiPropertyOptional({
        example: 'XXX',
        description: "Describes about student's sub caste name",
        enum: StudentCommunity,
        enumName: 'StudentCommunity',
    })
    @IsNotEmpty()
    @IsOptional()
    @IsEnum(StudentCommunity)
    studentCommunity: StudentCommunity

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's religion name",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentReligion: string

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's nationality name",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentNationality: string

    @ApiPropertyOptional({
        type: 'string',
        example: 'XXX',
        description: "Describes about student's mother tongue name",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentMotherTongue: string

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's mother tongue name",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentLanguageKnown: string

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's blood group name",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentBloodGroup: string

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's adhaar number",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentAadharNumber: string

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's EMI's  number",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentEMINumber: string

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's previous school",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentPreviousSchool: string

    @ApiPropertyOptional({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's discount percentage",
    })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    studentDiscount: string
}

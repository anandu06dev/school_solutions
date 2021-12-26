import { IsNotEmpty, IsOptional } from 'class-validator'
import { Timestamp } from 'typeorm'

export class StudentDetailDto {
    admissionNo?: number

    @IsNotEmpty()
    admissionDate?: Timestamp
    @IsNotEmpty()
    studentFirstName?: string
    @IsNotEmpty()
    studentClass?: string
    @IsNotEmpty()
    studentLastName?: string
    @IsNotEmpty()
    studentFatherName?: string
    @IsNotEmpty()
    studentMotherName?: string
    @IsNotEmpty()
    studentGender?: string
    @IsNotEmpty()
    studentDOB?: Timestamp
    @IsNotEmpty()
    studentCaste?: string
    @IsNotEmpty()
    studentSubCaste?: string
    @IsNotEmpty()
    studentCommunity?: string
    @IsNotEmpty()
    studentReligion?: string
    @IsNotEmpty()
    studentNationality?: string
    @IsNotEmpty()
    studentMotherToungue?: string
    @IsNotEmpty()
    studentLangaugeKnown?: string
    @IsNotEmpty()
    studentBloodGroup?: string
    @IsNotEmpty()
    studentAadharNumber?: string
    @IsNotEmpty()
    studentEMINo?: string
    @IsNotEmpty()
    studentPreviousSchool?: string
    @IsNotEmpty()
    studentDiscount?: number
    @IsOptional()
    studentIsActive?: boolean
}

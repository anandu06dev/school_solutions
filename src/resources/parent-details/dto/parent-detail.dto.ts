import { IsNotEmpty } from 'class-validator'

export class ParentDetailDto {
    admissionNo: number
    @IsNotEmpty()
    parentCode?: number
    @IsNotEmpty()
    parentEducation?: string
    @IsNotEmpty()
    parentOccupation?: string
    @IsNotEmpty()
    parentAadharNo?: number
    @IsNotEmpty()
    parentPhoneNo?: number
    @IsNotEmpty()
    parentEmailId?: string
}

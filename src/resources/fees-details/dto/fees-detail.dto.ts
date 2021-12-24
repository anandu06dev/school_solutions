import { IsNotEmpty } from 'class-validator'

export class FeesDetailDto {
    admissionNo: number
    @IsNotEmpty()
    feesDate?: Date
    @IsNotEmpty()
    feesBillNo?: number
    @IsNotEmpty()
    feesAmount?: number
    @IsNotEmpty()
    feesBalance?: number
    @IsNotEmpty()
    feesDiscount?: number
    @IsNotEmpty()
    feesNotes?: string
}

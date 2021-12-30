import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class FeesDetailDto {
    admissionNo: number

    @ApiProperty({
        example: '23-12-2019',
        type: 'Date',
        description: 'Describes about Fees Date-dd-mm-yyyy',
    })
    @IsNotEmpty()
    feesDate?: Date
    @ApiProperty({
        example: '2001',
        type: 'number',
        description: 'Describes about FeesBillNo',
    })
    @IsNotEmpty()
    feesBillNo?: number
    @ApiProperty({
        example: '45000',
        type: 'number',
        description: 'Describes about Fees Amount',
    })
    @IsNotEmpty()
    feesAmount?: number
    @ApiProperty({
        example: 'Fees Balance',
        type: 'number',
        description: 'Describes about FeesBalance',
    })
    @IsNotEmpty()
    feesBalance?: number
    @ApiProperty({
        example: '95',
        type: 'number',
        description: 'Describes about FeesDiscount',
    })
    @IsNotEmpty()
    feesDiscount?: number
    @ApiProperty({
        example: 'Fees Notes',
        type: 'string',
        description: 'Describes about Fees Notes',
    })
    @IsNotEmpty()
    feesNotes?: string
}

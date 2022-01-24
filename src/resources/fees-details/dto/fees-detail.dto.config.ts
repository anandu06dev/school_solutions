import { FeesDetailDto } from './fees-detail.dto'

export class FeesDetailDtoconfig extends FeesDetailDto {
    constructor() {
        super()
        return {
            feesDate: super.feesDate,
            feesBillNo: super.feesBillNo,
            feesAmount: super.feesAmount,
            feesBalance: super.feesBalance,
            feesDiscount: super.feesDiscount,
            feesNotes: super.feesNotes,
        }
    }
}

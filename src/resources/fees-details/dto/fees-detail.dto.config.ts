import { FeesDetailDto } from './fees-detail.dto'

export class FeesDetailDtoconfig extends FeesDetailDto {
    constructor() {
        super()
        return {
            feesDate: null,
            feesBillNo: null,
            feesAmount: null,
            feesBalance: null,
            feesDiscount: null,
            feesNotes: null,
        }
    }
}

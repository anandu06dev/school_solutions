import { SiblingDetailDto } from './sibling-detail.dto'

export class SiblingDetailDtoConfig extends SiblingDetailDto {
    constructor() {
        super()
        return {
            siblingClass: null,
            siblingRelation: null,
            siblingDob: null,
            siblingDiscount: null,
        }
    }
}

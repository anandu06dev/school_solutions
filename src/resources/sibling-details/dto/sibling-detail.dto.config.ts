import { SiblingDetailDto } from './sibling-detail.dto'

export class SiblingDetailDtoConfig extends SiblingDetailDto {
    constructor() {
        super()
        return {
            siblingClass: super.siblingClass,
            siblingRelation: super.siblingRelation,
            siblingDob: super.siblingDob,
            siblingDiscount: super.siblingDiscount,
        }
    }
}

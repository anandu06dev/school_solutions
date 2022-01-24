import { ParentDetailDto } from './parent-detail.dto'

export class ParentDetailDtoConfig extends ParentDetailDto {
    constructor() {
        super()
        return {
            parentCode: null,
            parentEducation: null,
            parentOccupation: null,
            parentAadharNo: null,
            parentPhoneNo: null,
            parentEmailId: null,
        }
    }
}

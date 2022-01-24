import { ParentDetailDto } from './parent-detail.dto'

export class ParentDetailDtoConfig extends ParentDetailDto {
    constructor() {
        super()
        return {
            parentCode: super.parentCode,
            parentEducation: super.parentEducation,
            parentOccupation: super.parentOccupation,
            parentAadharNo: super.parentAadharNo,
            parentPhoneNo: super.parentPhoneNo,
            parentEmailId: super.parentEmailId,
        }
    }
}

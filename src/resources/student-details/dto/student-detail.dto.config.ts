import { StudentDetailDto } from './student-detail.dto'
export class StudentDetailDtoConfig extends StudentDetailDto {
    constructor() {
        super()
        return {
            studentIsActive: true,
            admissionNo: null,
            admissionDate: null,
            studentFirstName: null,
            studentClass: null,
            studentLastName: null,
            studentFatherName: null,
            studentMotherName: null,
            studentGender: null,
            studentDOB: null,
            studentCaste: null,
            studentSubCaste: null,
            studentCommunity: null,
            studentReligion: null,
            studentNationality: null,
            studentMotherToungue: null,
            studentLangaugeKnown: null,
            studentBloodGroup: null,
            studentAadharNumber: null,
            studentEMINo: null,
            studentPreviousSchool: null,
            studentDiscount: null,
        }
    }
}

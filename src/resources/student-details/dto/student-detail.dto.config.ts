import { StudentDetailDto } from './student-detail.dto'
export class StudentDetailDtoConfig extends StudentDetailDto {
    constructor() {
        super()
        return {
            // studentIsActive: super.studentIsActive,
            studentIsActive: true,
            admissionNo: null,
            admissionDate: null,
            studentFirstName: super.studentFirstName,
            studentClass: super.studentClass,
            studentLastName: super.studentLastName,
            studentFatherName: super.studentFatherName,
            studentMotherName: super.studentMotherName,
            studentGender: super.studentGender,
            studentDOB: super.studentDOB,
            studentCaste: super.studentCaste,
            studentSubCaste: super.studentSubCaste,
            studentCommunity: super.studentCommunity,
            studentReligion: super.studentReligion,
            studentNationality: super.studentNationality,
            studentMotherToungue: super.studentMotherToungue,
            studentLangaugeKnown: super.studentLangaugeKnown,
            studentBloodGroup: super.studentBloodGroup,
            studentAadharNumber: super.studentAadharNumber,
            studentEMINo: super.studentEMINo,
            studentPreviousSchool: super.studentPreviousSchool,
            studentDiscount: super.studentDiscount,
        }
    }
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('student_details', { schema: 'app_schl_dev' })
export class StudentDetails {
    constructor(partial: StudentDetails) {
        Object.assign(this, partial)
    }
    @PrimaryGeneratedColumn()
    @Column('int', {
        default: 0,
        primary: true,
        name: 'ADMN_NO',
        comment: ' Admission Number',
    })
    admissionNo: number

    @Column('timestamp', {
        name: 'ADMIN_DATE',
        nullable: true,
        comment: 'Admission Date',
    })
    admissionDate: Date | null

    @Column('varchar', {
        name: 'STUD_FIRST_NAME',
        nullable: true,
        comment: 'Student First Name',
        length: 100,
    })
    studentFirstName: string | null

    @Column('varchar', {
        name: 'STUD_CLASS',
        nullable: true,
        comment: 'STUDENT CLASS',
        length: 5,
    })
    studentClass: string | null

    @Column('varchar', {
        name: 'STUD_LAST_NAME',
        nullable: true,
        comment: 'STUDENT LAST NAME',
        length: 100,
    })
    studentLastName: string | null

    @Column('varchar', {
        name: 'STUD_FATH_NAME',
        nullable: true,
        comment: 'Student Father Name',
        length: 100,
    })
    studentFatherName: string | null

    @Column('varchar', {
        name: 'STUD_MTHR_NAME',
        nullable: true,
        comment: 'MOTHER NAME',
        length: 100,
    })
    studentMotherName: string | null

    @Column('varchar', {
        name: 'STUD_GNDR',
        nullable: true,
        comment: 'Studen Gender',
        length: 10,
    })
    studentGender: string | null

    @Column('timestamp', {
        name: 'STUD_DOB',
        nullable: true,
        comment: 'Student Date of Birth',
    })
    studentDob: Date | null

    @Column('varchar', { name: 'STUD_CASTE', nullable: true, length: 100 })
    studentCaste: string | null

    @Column('varchar', {
        name: 'STUD_SUB_CASTE',
        nullable: true,
        comment: 'STUDENT SUB CASTE',
        length: 100,
    })
    studentSubCaste: string | null

    @Column('varchar', {
        name: 'STUD_CMTY',
        nullable: true,
        comment: 'STUDENT COMMUNITY (SC/ST, MBC, BC,OC,BCM)\r',
        length: 10,
    })
    studentCommunity: string | null

    @Column('varchar', {
        name: 'STUD_RLIG',
        nullable: true,
        comment: 'STUDENT RELIGION',
        length: 100,
    })
    studentReligion: string | null

    @Column('varchar', {
        name: 'STUD_NTLY',
        nullable: true,
        comment: 'STUDENT NATIONALITY',
        length: 100,
    })
    studentNationality: string | null

    @Column('varchar', {
        name: 'STUD_MTHR_TNGE',
        nullable: true,
        comment: 'MOTHER TONGUE',
        length: 100,
    })
    studentMotherToungue: string | null

    @Column('varchar', {
        name: 'STUD_LNG_KNWN',
        nullable: true,
        comment: ' STUDENT LANGUAGES KNOWN',
        length: 100,
    })
    studentLangaugeKnown: string | null

    @Column('varchar', {
        name: 'STUD_BLD_GRUP',
        nullable: true,
        comment: ' STUDENT BLOOD GROUP',
        length: 100,
    })
    studentBloodGroup: string | null

    @Column('varchar', {
        name: 'STUD_AHAR_NO',
        nullable: true,
        comment: 'STUDENT AADHAR NUMBER',
        length: 100,
    })
    studentAadharNumber: string | null

    @Column('varchar', {
        name: 'STUD_EMIS_NO',
        nullable: true,
        comment: 'STUDENT EMIS NO',
        length: 100,
    })
    studentEmisNo: string | null

    @Column('varchar', {
        name: 'STUD_PREV_SCHL',
        nullable: true,
        comment: ' STUDENT PREVIOUS SCHOOL',
        length: 100,
    })
    studentPreviousSchool: string | null

    @Column('double', {
        name: 'STUD_DISCOUNT',
        nullable: true,
        comment: 'STUDENT DISCOUNT',
        precision: 22,
    })
    studentDiscount: number | null

    @Column('int', {
        name: 'STUD_IS_ACTIVE',
        comment: 'STUDENT IS ACTIVE',
    })
    studentIsActive: boolean
}

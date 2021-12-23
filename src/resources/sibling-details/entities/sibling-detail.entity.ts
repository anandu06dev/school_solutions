import { Column, Entity } from 'typeorm'

@Entity('sibling_details', { schema: 'app_schl_dev' })
export class SiblingDetails {
    @Column('varchar', {
        name: 'ADMN_NO',
        comment: 'Admission Number',
        length: 50,
    })
    admissionNo: string

    @Column('int', { name: 'PRNT_CD', comment: 'PARENT CODE' })
    parentCode: number

    @Column('varchar', {
        name: 'PRNT_EDUC',
        nullable: true,
        comment: 'PARENT EDUCATION',
        length: 100,
    })
    parentEducation: string | null

    @Column('varchar', {
        name: 'PRNT_OCCU',
        nullable: true,
        comment: 'PARENT OCCUPATION',
        length: 100,
    })
    parentOccupation: string | null

    @Column('int', {
        name: 'PRNT_AADH_NO',
        nullable: true,
        comment: 'AADHAR CARD NUMBER( XXXX -XXXX-XXXX)',
    })
    parentAadharNo: number | null

    @Column('int', {
        name: 'PRNT_PHNE_NO',
        nullable: true,
        comment: 'PHONE NUMBER ( 12345 -12345)',
    })
    parentPhoneNo: number | null

    @Column('varchar', {
        name: 'PRNT_EMAIL_ID',
        nullable: true,
        comment: 'PARENT ADDRESS 5',
        length: 150,
    })
    parentEmailId: string | null
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('sibling_details', { schema: 'app_schl_dev' })
export class SiblingDetails {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('varchar', {
        name: 'ADMN_NO',
        comment: 'Admission Number',
        length: 50,
    })
    admissionNo: number

    @Column('int', { name: 'SBLN_RELA', comment: 'SIBLING RELATION' })
    siblingRelation: number

    @Column('varchar', {
        name: 'SBLN_CLAS',
        nullable: true,
        comment: 'SIBLING CLASS',
        length: 150,
    })
    siblingClass: string | null

    @Column('timestamp', {
        name: 'SBLN_DOB',
        nullable: true,
        comment: 'SIBLING DATE OF BIRTH',
    })
    siblingDob: Date | null

    @Column('double', {
        name: 'SBLN_DISCO',
        nullable: true,
        comment: 'SIBLING DISCOUNT',
        precision: 22,
    })
    siblingDiscount: number | null
}

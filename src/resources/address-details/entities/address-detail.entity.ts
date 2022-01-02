import { StudentDetails } from '@resources/student-details/entities/student-detail.entity'
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('address_details', { schema: 'app_schl_dev' })
export class AddressDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('varchar', {
        name: 'PRNT_ADRS_CD',
        comment: ' Admission Number',
        length: 50,
    })
    printAddressCd: string

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD1',
        nullable: true,
        comment: ' PARENT ADDRESS 21',
        length: 110,
    })
    printAddressAdd1: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD2',
        nullable: true,
        comment: ' PARENT ADDRESS 2',
        length: 100,
    })
    printAddressAdd2: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD3',
        nullable: true,
        comment: ' PARENT ADDRESS 3',
        length: 100,
    })
    printAddressAdd3: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD4',
        nullable: true,
        comment: ' PARENT ADDRESS 4',
        length: 100,
    })
    printAddressAdd4: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD5',
        nullable: true,
        comment: ' PARENT ADDRESS 5',
        length: 100,
    })
    printAddressAdd5: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_DIST',
        nullable: true,
        comment: 'PARENT ADDRESS DISTRICT',
        length: 100,
    })
    printAddressDist: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_PSTL_CD',
        nullable: true,
        comment: 'PARENT ADDRESS POSTEL CODE',
        length: 100,
    })
    printAddressPstlCd: string | null

    @Column('varchar', { primary: true, name: 'ADMN_NO' })
    admissionNo: number

    @ManyToOne(() => StudentDetails, (student) => student.siblings)
    @JoinColumn({ name: 'ADMN_NO', referencedColumnName: 'admissionNo' })
    studentDetails: StudentDetails
}

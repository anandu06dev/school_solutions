import { Column, Entity } from 'typeorm'

@Entity('fees_details', { schema: 'app_schl_dev' })
export class FeesDetails {
    @Column('varchar', {
        name: 'ADMN_NO',
        comment: 'Admission Number',
        length: 50,
    })
    admissionNo: string

    @Column('timestamp', {
        name: 'FEES_DATE',
        nullable: true,
        comment: 'FEES Date',
    })
    feesDate: Date | null

    @Column('int', { name: 'FEES_BILL_NO', comment: 'FEES BILL NO' })
    feesBillNo: number

    @Column('double', {
        name: 'FEES_AMOUNT',
        nullable: true,
        comment: 'FEES PAYING AMOUNT',
        precision: 22,
    })
    feesAmount: number | null

    @Column('double', {
        name: 'FEES_BALANCE',
        nullable: true,
        comment: 'FEES BALANCE',
        precision: 22,
    })
    feesBalance: number | null

    @Column('double', {
        name: 'FEES_DISCOUNT',
        nullable: true,
        comment: 'FEES DISCOUNT WHEN PAYING',
        precision: 22,
    })
    feesDiscount: number | null

    @Column('varchar', {
        name: 'FEES_NOTES',
        nullable: true,
        comment: 'SPECIAL NOTES',
        length: 500,
    })
    feesNotes: string | null
}

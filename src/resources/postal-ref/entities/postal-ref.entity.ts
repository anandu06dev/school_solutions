import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('postal_ref', { schema: 'app_schl_dev' })
export class PostalRef {
    @PrimaryGeneratedColumn()
    @Column('int', {
        default: 1,
        primary: true,
        name: 'Id',
        comment: 'Postal Unique Id',
    })
    id: BigInt

    @Column('varchar', {
        name: 'postalName',
        comment: 'PostalName',
        length: 50,
    })
    postalName: string

    @Column('varchar', {
        name: 'pincode',
        comment: 'PinCode',
        length: 50,
    })
    pincode: string

    @Column('varchar', {
        name: 'taluk',
        comment: 'Taluka Name',
        length: 50,
    })
    taluk: string

    @Column('varchar', {
        name: 'districtName',
        comment: 'District Name',
        length: 50,
    })
    districtName: string

    @Column('varchar', {
        name: 'stateName',
        comment: 'StateName',
        length: 50,
    })
    stateName: string
}

import { Column, Entity } from 'typeorm'

@Entity('bus_route_details', { schema: 'app_schl_dev' })
export class BusRouteDetails {
    @Column('varchar', {
        name: 'ADMN_NO',
        comment: 'Admission Number',
        length: 50,
    })
    admissionNo: string

    @Column('int', { name: 'BUS_RUTE_CD', comment: 'BUS ROUTE' })
    busRouteCode: number

    @Column('varchar', {
        name: 'BUS_RUTE_NO',
        nullable: true,
        comment: 'BUS NUMBER',
        length: 16,
    })
    busRouteNo: string | null

    @Column('varchar', {
        name: 'BUS_RUTE_DRIVER_NAME',
        nullable: true,
        comment: 'DRIVER NAME',
        length: 150,
    })
    busRouteDriverName: string | null

    @Column('int', {
        name: 'BUS_RUTE_DRIVER_NO',
        nullable: true,
        comment: 'DRIVER PHONE NUMBER',
    })
    busRouteDriverNo: number | null

    @Column('varchar', {
        name: 'BUS_RUTE_INCH_NAME',
        nullable: true,
        comment: 'INCHARGER NAME',
        length: 150,
    })
    busRouteInchargeName: string | null

    @Column('int', {
        name: 'BUS_RUTE_INCH_NO',
        nullable: true,
        comment: 'DRIVER MOBILE NUMBER',
    })
    busRouteInchargeNo: number | null

    @Column('varchar', {
        name: 'BUS_RUTE_INS_DTL',
        nullable: true,
        comment: 'BUS INSURANE DETAILS',
        length: 150,
    })
    busRouteInsDtl: string | null
}

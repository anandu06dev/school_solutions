import { AbstractEntity } from '@common/entities'
import {
    PrimaryGeneratedColumn,
    Column,
    Timestamp,
    UpdateDateColumn,
} from 'typeorm'
import { Entity } from 'typeorm/decorator/entity/Entity'

@Entity('student_details', { schema: 'app_schl_dev' })
export class UserRole extends AbstractEntity {
    @PrimaryGeneratedColumn('uuid')
    @Column('varchar', {
        name: 'ROLE_ID',
        comment: 'Role Id',
    })
    roleId: string

    @Column('varchar', {
        name: 'USER_ID',
        comment: 'User Id',
    })
    userId: string

    @Column('json', {
        name: 'ROLE_ACESS',
        nullable: false,
        comment: 'Role Access',
    })
    roleAccess: JSON

    @UpdateDateColumn({ type: 'timestamp', name: 'LAST_UPDT_BY' })
    createdTimeStamp: Timestamp
}

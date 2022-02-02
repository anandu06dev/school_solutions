import { AbstractEntity } from '@common/entities'
import { UserEntity } from '@resources/user/entities/user.entity'
import { Transform } from 'class-transformer'
import {
    PrimaryGeneratedColumn,
    Column,
    Timestamp,
    UpdateDateColumn,
    PrimaryColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm'
import { Entity } from 'typeorm/decorator/entity/Entity'

@Entity('user_role', { schema: 'app_schl_dev' })
export class UserRole extends AbstractEntity {
    @PrimaryGeneratedColumn('uuid')
    @PrimaryColumn('varchar', {
        name: 'ROLE_ID',
        comment: 'Role Id',
    })
    roleId: string

    @Column('varchar', {
        name: 'USER_ID',
        comment: 'User Id',
    })
    userId: string
    @Column('varchar', {
        name: 'ROLE_NM',
        comment: 'Role Name',
    })
    roleName: string

    @Column('longtext', {
        name: 'ROLE_ACESS',
        nullable: false,
        comment: 'Role Access',
    })
    roleAccess: string

    @UpdateDateColumn({ type: 'timestamp', name: 'LAST_UPDT_BY' })
    updatedBy: Timestamp

    @Column('varchar', {
        name: 'LEFT_MENU_ACESS',
        nullable: false,
        comment: 'Left Menu Access',
    })
    leftMenuAcess: string

    @ManyToOne(() => UserEntity, (user) => user.userRole)
    @JoinColumn({ name: 'USER_ID', referencedColumnName: 'id' })
    userEntity: UserEntity
}

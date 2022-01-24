import { UserRole } from '@resources/user-role/entities/user-role.entity'
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    OneToOne,
} from 'typeorm'

@Entity('user_details')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    @Column({
        type: 'varchar',
        nullable: false,
        primary: true,
    })
    id: string

    @Column({
        type: 'varchar',
        nullable: false,
    })
    username: string

    // @BeforeInsert() async hashPassword() {
    //     this.password = await bcrypt.hash(this.password, 10)
    // }
    @Column({
        type: 'varchar',
        nullable: false,
    })
    password: string

    @Column({
        type: 'varchar',
        nullable: false,
    })
    email: string

    @OneToOne((type) => UserRole, (userRole) => userRole.userEntity)
    userRole: UserRole
}

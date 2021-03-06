import { Exclude } from 'class-transformer'
import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

export abstract class AbstractEntity {
    // @PrimaryGeneratedColumn()
    // @Exclude()
    // public id: number

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    @Exclude()
    CRET_TS: Date

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    @Exclude()
    LAST_UPDT_TS: Date
}

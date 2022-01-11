import { Exclude } from 'class-transformer'
import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class AbstractEntity {
    // @PrimaryGeneratedColumn()
    // @Exclude()
    // public id: number

    @CreateDateColumn({
        type: 'timestamp',
        name: 'CRET_TS',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdTimeStamp: Date

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'LAST_UPDT_TS',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    lastUpdatedts: Date
}

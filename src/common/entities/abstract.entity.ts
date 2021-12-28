import { Exclude } from 'class-transformer'
import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class AbstractEntity {
    // @PrimaryGeneratedColumn()
    // @Exclude()
    // public id: number

    @CreateDateColumn({
        type: 'timestamp',
        name: 'CRET_TS',
        default: () => new Date(),
    })
    @Exclude()
    createdTimeStamp: Date

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'LAST_UPDT_TS',
        default: () => new Date(),
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    @Exclude()
    lastUpdatedts: Date
}

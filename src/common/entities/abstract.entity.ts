import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class AbstractEntity {
    // @PrimaryGeneratedColumn()
    // @Exclude()
    // public id: number

    // @CreateDateColumn({
    //     name: 'CRET_TS',
    // })
    // createdTimeStamp: Date

    @CreateDateColumn({ type: 'timestamp', name: 'CRET_TS' })
    createdTimeStamp: any
    @UpdateDateColumn({ type: 'timestamp', name: 'LAST_UPDT_TS' })
    updatedTimeStamp: any
    //   @UpdateDateColumn({
    //     type: 'timestamp',
    //     name: 'LAST_UPDT_TS',
    //     default: () => 'CURRENT_TIMESTAMP',
    //     onUpdate: 'CURRENT_TIMESTAMP(6)',
    // })
    // lastUpdatedts: Date
}

import { Column, Entity } from 'typeorm'

import { Gender, StudentCommunity } from '../enums/enum'
import { AbstractEntity } from '@common/entities'

@Entity({ name: 'students' })
export class StudentEntity extends AbstractEntity {
    @Column({
        type: 'date',
        nullable: false,
    })
    admissionDate: Date

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentFirstName: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentLastName: string

    @Column({
        type: 'char',
        length: 5,
        nullable: false,
    })
    studentClass: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentFatherName: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentMotherName: string

    @Column({
        type: 'enum',
        enum: Gender,
    })
    role: Gender

    @Column({
        type: 'date',
        nullable: false,
    })
    studentDOB: Date

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentCaste: string

    @Column({
        type: 'enum',
        enum: StudentCommunity,
    })
    studentCommunity: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentReligion: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentNationality: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentMotherTongue: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentLanguageKnown: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentBloodGroup: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentAadharNumber: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentEMINumber: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentPreviousSchool: string

    @Column({
        type: 'numeric',
        nullable: false,
    })
    studentDiscount: number
}

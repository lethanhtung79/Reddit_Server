import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity("users") //db table
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({unique: true})
    username!: string

    @Column({unique: true})
    email!: string

    @Column()
    password!: string

    @CreateDateColumn()
    cratedAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}
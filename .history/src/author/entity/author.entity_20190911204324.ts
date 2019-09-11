import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    gender: string;

    @Column()
    ipAddress: string;
}

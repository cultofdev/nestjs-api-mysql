import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    gender: string;

    @Column()
    ip_address: string;
}

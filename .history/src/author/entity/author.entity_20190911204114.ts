import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    gender: string;

    @Column()
    ip_address: string;
}

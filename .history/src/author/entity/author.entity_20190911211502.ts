import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'authors' })
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, name: 'first_name' })
    firstName: string;

    @Column({ length: 255, name: 'last_name' })
    lastName: string;

    @Column()
    email: string;

    @Column()
    gender: string;

    @Column({ length: 255, name: 'ip_address' })
    ipAddress: string;
}

import { Injectable } from '@nestjs/common';
import { Author } from './entity/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {

    constructor(
        @InjectRepository(Author) private readonly authorRepository: Repository<Author>,
    ) {}

    async findAll(): Promise<Author[]> {
        return await this.authorRepository.find();
    }
}

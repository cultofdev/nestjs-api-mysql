import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { Author } from './entity/author.entity';

@Injectable()
export class AuthorService {

    constructor(
        private readonly authorRepository: AuthorRepository,
    ) {}

    async findAll(): Promise<Author[]> {
        return await this.authorRepository.find();
    }
}

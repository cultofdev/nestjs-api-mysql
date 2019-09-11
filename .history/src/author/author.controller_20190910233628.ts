import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorRepository } from './author.repository';

@Controller('author')
export class AuthorController {

    constructor(
        @InjectRepository(AuthorRepository) private readonly authorRepository: AuthorRepository,
    ) {}

    @Get()
    findAll() {
        return this.authorRepository.findAll;
    }
}

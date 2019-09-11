import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorRepository } from './author.repository';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {

    constructor(
        @InjectRepository(AuthorRepository) private readonly authorRepository: AuthorRepository,
        private readonly authorService: AuthorService,
    ) {}

    @Get()
    findAll() {
        return this.authorService.findAll();
    }
}

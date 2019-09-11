import { Controller, Get } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {

    constructor(
        private readonly authorServie: AuthorService,
    ) {}

    @Get()
    findAll() {
        return this.authorServie.findAll();
    }
}

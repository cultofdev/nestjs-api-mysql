import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { AuthorRepository } from './author.repository';

@Module({
    imports: [

    ],
    controllers: [
        AuthorController,
    ],
    providers: [
        AuthorService,
        AuthorRepository,
    ],
})
export class AuthorModule {}

import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { AuthorRepository } from './author.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([AuthorRepository]),
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

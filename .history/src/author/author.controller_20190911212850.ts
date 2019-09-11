import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorService } from './author.service';
import { Author } from './entity/author.entity';
import { Repository } from 'typeorm';

@Controller('author')
export class AuthorController {

    constructor(
        private readonly authorService: AuthorService,
    ) {}

    @Get()
    findAll(): Promise<Author[]> {
        return this.authorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Author> {
        return this.authorService.findOne(id);
    }

    @Post()
    insertOne(@Body() author: Author): Promise<Author> {
        return this.authorService.insertOne(author);
    }
}

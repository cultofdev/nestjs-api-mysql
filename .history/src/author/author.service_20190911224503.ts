import { Injectable } from '@nestjs/common';
import { Author } from './entity/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class AuthorService {

    constructor(
        @InjectRepository(Author) private readonly authorRepository: Repository<Author>,
    ) {}

    async findAll(): Promise<Author[]> {
        return await this.authorRepository.find();
    }

    async findOne(id: number): Promise<Author> {
        return await this.authorRepository.findOne({id});
    }

    async insertOne(author: Author): Promise<Author> {
        return await this.authorRepository.save(author);
    }

    async updateOne(author: Author): Promise<UpdateResult> {
        return await this.authorRepository.update(author.id, author);
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return await this.authorRepository.delete(id);
    }
}

import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
    ],
    controllers: [
        AuthorController,
    ],
    providers: [
        AuthorService,
    ],
})
export class AuthorModule {}

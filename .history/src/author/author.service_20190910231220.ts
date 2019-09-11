import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {

    async findAll(): Promise<string> {
        return await 'THIS  MESSAGE';
    }
}

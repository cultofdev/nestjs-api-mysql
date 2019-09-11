import { Controller, Get } from '@nestjs/common';

@Controller('author')
export class AuthorController {

    @Get()
    findAll() {
        return 'THIS IS FROM CONTROLLER'
    }
}

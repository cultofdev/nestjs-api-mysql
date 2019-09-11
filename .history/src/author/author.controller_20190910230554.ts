import { Controller, Get } from '@nestjs/common';

@Controller()
export class AuthorController {

    @Get()
    findAll() {
        return 'THIS IS FROM CONTROLLER'
    }
}
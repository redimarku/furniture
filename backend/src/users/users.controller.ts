import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './Entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('all')
    public async getAllUsers(): Promise<UserEntity[]> {
        return this.usersService.findAll();
    }
}
import { UserDetails } from './user.details.entity';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { getConnection } from 'typeorm';
import { Role } from '../role/role.entity'


@Controller('users')
export class UserController {
    constructor(private readonly _userService: UserService){}
    
    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
        const user = await this._userService.get(id);
        return user
    }

    @Get()
    async getUsers(): Promise<UserDto[]> {
        const users = await this._userService.getAll();
        return users
    }
    
    @Post()
    async createUser(@Body() user: User): Promise<UserDto>{
        const details = new UserDetails();
        user.details = details;

        const repo = await getConnection().getRepository(Role);
        const defaultRole = await repo.findOne({where: { name: 'GENERAL' } });
        user.roles = [defaultRole];

        const createdUser = await this._userService.create(user);
        return createdUser;
    }

    @Patch(':id')
    async updatedUSer(@Param('id', ParseIntPipe) id:number, @Body() user: User): Promise<void> {
        await this._userService.update(id,user);
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this._userService.delete(id);
    }
}

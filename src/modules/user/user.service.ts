import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from '../../shared/mapper.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserRepository)
        private readonly _userRepository: UserRepository,
        private readonly _mapperServices: MapperService 

    ){}

    async get(id: number):Promise<UserDto> {
        if (!id) {
            throw new BadRequestException('id must be sent')
        }

        const user: User = await this._userRepository.findOne(id, 
            {where: {status: 'ACTIVE'}
        });

        if (!user) {
            throw new NotFoundException();
        }

        return this._mapperServices.map<User, UserDto>(user, new UserDto());
    }

    async getAll():Promise<UserDto[]> {
        const users: User[] = await this._userRepository.find( 
            {where: {status: 'ACTIVE'}
        });
        return this._mapperServices.mapCollection<User, UserDto>(users, new UserDto());
    }
    
    async create(user: User): Promise<UserDto> {
        const saveUser: User = await this._userRepository.save(user);
        return this._mapperServices.map<User, UserDto>(saveUser, new UserDto());
    }

    async update(id: number, user: User): Promise<void> {
        await this._userRepository.update(id, user)
    }

    async delete(id: number): Promise<void> {
        const UserExists = await this._userRepository.findOne(id, {
            where: { status: 'ACTIVE' }
        });

        if(!UserExists){
            throw new NotFoundException();
        }

        await this._userRepository.update(id, { status: 'INACTIVE'})
    }
}

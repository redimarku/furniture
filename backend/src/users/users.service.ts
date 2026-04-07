import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './Entity/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}

    public async findAll(): Promise<UserEntity[]> {
    try {
        const result = await this.userRepository.find();
        return result;
    } catch (error) {
        throw new HttpException(
            'Failed to fetch users',
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}

    public async findByEmail(email: string): Promise<UserEntity | null>{

        try{
            const result = await this.userRepository.findOne({where: { email }});
            return result;
        } catch (error){
            throw new HttpException('We couldnt find any user', HttpStatus.NOT_FOUND);
        }
    }

    public async createUser(user: UserDto): Promise<UserEntity>{
        try{
             return await this.userRepository.save(user);   
        } catch(error) {
            throw new HttpException('Failed to create User', HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


   public async findById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
}


}

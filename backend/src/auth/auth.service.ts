import { BadRequestException, Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { UserEntity } from 'src/users/Entity/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/users/dto/login.dto';
import { Request } from 'express';

@Injectable()
export class AuthService {

    constructor( private readonly usersService: UsersService, private jwtService: JwtService ) {}

   public async register(body: UserDto): Promise<{user: UserEntity, token: string}> {
    const checkUser = await this.usersService.findByEmail(body.email);
    if (checkUser) {
        throw new BadRequestException('You are already registered');
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const userData = {
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        password: hashedPassword,
        role: 'user',
    };

    const user = await this.usersService.createUser(userData);
    const token = await this.jwtService.signAsync({ id: user.id });

    return { user, token };
}


   public async login(body: LoginDto): Promise<{user: UserEntity, token: string}> {
        const user = await this.usersService.findByEmail(body.email);
        if (!user) {
            throw new HttpException('User with that email does not exist. Please login', HttpStatus.NOT_FOUND);
        }

        const isPasswordValid = await bcrypt.compare(body.password, user.password);
        if (!isPasswordValid) {
            throw new HttpException('Password is incorrect', HttpStatus.BAD_REQUEST);
        }

        const token = await this.jwtService.signAsync({ id: user.id });
        return { user, token };
    }
    
     public async authUserId(request: Request): Promise<number> {
        try {
            const jwt = request.cookies?.jwt;
            if (!jwt) {
                throw new HttpException("You are anauthorized", HttpStatus.UNAUTHORIZED);
            }

            const decodedToken: any = this.jwtService.decode(jwt);
            const currentTime = Math.floor(Date.now() / 1000);

            if (decodedToken.exp < currentTime) {
                throw new HttpException("Token expired", HttpStatus.UNAUTHORIZED);
            }
            const { id } = await this.jwtService.verifyAsync(jwt);
            return id;
        } catch (error) {
            throw new HttpException(error.response, error.status);
        }
    }



    public async getUserById(id: number): Promise<UserEntity> {
        try {
            const result = await this.usersService.findById(id);
            if (!result) {
                throw new HttpException("User with this id was not found", HttpStatus.NOT_FOUND);
            }
            return result;
        } catch (error) {
            throw new HttpException(error.response, error.status);
        }
    }


}

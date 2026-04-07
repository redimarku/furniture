import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/users/dto/user.dto';
import { UserEntity } from 'src/users/Entity/user.entity';
import type { Request, Response } from 'express';
import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from 'src/users/users.service';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService, private readonly userService: UsersService){}

    

      @Post('register')
    public async register(@Body() body: UserDto,  @Res({ passthrough: true }) response: Response): Promise<UserEntity> {
        const { user, token } = await this.authService.register(body);
        response.cookie('jwt', token, { httpOnly: true });
        // const { password, ...safeUser } = user;
            return user;
    }


    @Post('login')
    public async login(@Body() body: LoginDto, @Res({ passthrough: true }) response: Response){
        const { user, token } = await this.authService.login(body);
        response.cookie('jwt', token, { httpOnly: true, sameSite: 'lax', 
  secure: false,  });
        return user;
     }


     @Post('logout')
     public async logut(@Res({passthrough: true}) response: Response){
        response.clearCookie('jwt');
        return { 
            "message " : "success",
            "status": 201
        }
     }  


    @Get('checkUser')
    public async checkAuthUser(@Req() request: Request): Promise<UserEntity> {
    const id = await this.authService.authUserId(request);
    return await this.authService.getUserById(id); 
}

    public async getUserById(id: number): Promise<UserEntity> {
        return await this.userService.findById(id);
    }
    


}

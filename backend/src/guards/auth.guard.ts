import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { IS_PUBLIC_KEY } from "src/decorators/public.decorator";
import { UsersService } from "src/users/users.service";



@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private reflector: Reflector,
        private jwtService: JwtService,
        private usersService: UsersService

    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.get<string[]>('isPublic', context.getHandler());

        if(isPublic){
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const jwt = request.cookies.jwt;

        if(!jwt){
            throw new HttpException('You are not authorized', HttpStatus.FORBIDDEN);
        }

        try{
            const payload = this.jwtService.verify(jwt);
            const user = await this.usersService.findById(payload.id);
            
            request.user = user;
            return true;
        } catch (error){
               throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);  
        }
    }
}
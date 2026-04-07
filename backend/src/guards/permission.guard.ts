import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
export class PermissionGuard implements CanActivate {

    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const isPublic = this.reflector.get<boolean>('isPublic', context.getHandler());
        if (isPublic) return true;                             

        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) return true;                               

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!roles.includes(user.role)) {
            throw new HttpException('You do not have permissions', HttpStatus.UNAUTHORIZED);
        }

        return true;
    }
}
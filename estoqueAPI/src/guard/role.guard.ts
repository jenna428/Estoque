import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "src/decorator/role.decorator";
import { Role } from "src/enums/enums";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector    
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user || !user.roles) {
            throw new ForbiddenException('Usuário sem permissões');
        }

        const hasRole = requiredRoles.some(role =>
            user.roles.includes(role),
        );

        if (!hasRole) {
            throw new ForbiddenException('Acesso negado');
        }

        return true;
    }

}
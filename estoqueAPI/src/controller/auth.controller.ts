import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { Roles } from 'src/decorator/role.decorator';
import { LoginDto } from 'src/dto/login.dto';
import { Role } from 'src/enums/enums';
import { RolesGuard } from 'src/guard/role.guard';
import { UserService } from 'src/service/user.service';


@Controller('api/login')
export class AuthController {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ){}

    @Post()
    async login(@Body() loginDto: LoginDto, @Res({passthrough: true}) res: Response){
        const roles = await this.userService.login(loginDto);

        const payload = {
            roles: roles
        }

        const token = this.jwtService.sign(payload);

        return {
            access_token: token,
            roles: roles
        }
    }
}



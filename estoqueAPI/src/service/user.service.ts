import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/dto/login.dto';
import { UserEntity } from 'src/entity/user.entity';
import { UserRepository } from 'src/respository/user.repository';
import * as bcrypt from 'bcrypt';
import { GeralConfig } from 'src/config/geral.config';
import { Role } from 'src/enums/enums';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: UserRepository
    ) {}


    async login(loginDto: LoginDto) : Promise<Role[]> {
        const user = await this.userRepository.findOne({
            relations: ['roles'],
            where: {username: loginDto.username}
        });

        if (!user) {
            throw new HttpException('Usuário ou Senha incorretos!', HttpStatus.NOT_FOUND)
        }

        const hash = await bcrypt.hash(loginDto.password, GeralConfig.SALTROUND);
        const isLogged = bcrypt.compare(user.password, hash);

        if (!isLogged) {
            throw new HttpException('Usuário ou Senha incorretos!', HttpStatus.NOT_FOUND)
        }

        return user.roles.map(r => r.role);
    }
}
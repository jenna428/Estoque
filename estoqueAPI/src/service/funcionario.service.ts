import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FuncionarioDto } from "src/dto/funcionario.dto";
import { FuncionarioEntity } from "src/entity/funcionario.entity";
import { FuncionarioMapper } from "src/mapper/funcionario.mapper";
import { FuncionarioRepository } from "src/respository/funcionario.repository";
import { GeralConfig } from "src/config/geral.config";
import { CreateFuncionarioDto } from "src/dto/create-funcionario.dto";
import { CreateFuncionarioMapper } from "src/mapper/create-funcionario.mapper";
import * as bcrypt from 'bcrypt';
import { UserEntity } from "src/entity/user.entity";
import { UserRepository } from "src/respository/user.repository";
import { UserRoleRepository } from "src/respository/user-role.repository";
import { UserRoleEntity } from "src/entity/user-role.entity";

@Injectable()
export class FuncionarioService{

    constructor(
        @InjectRepository(FuncionarioEntity)
        private readonly funcionarioRepository: FuncionarioRepository,
        @InjectRepository(UserEntity)
        private readonly userRepository: UserRepository,
        @InjectRepository(UserRoleEntity)
        private readonly userRoleRepository: UserRoleRepository
    ){}

    async findOneById(funcionarioId: number): Promise<FuncionarioDto> {
            const funcionario = await this.funcionarioRepository.findOne({
                where: {id: funcionarioId}
            })
        
            return FuncionarioMapper.toDto(funcionario); 
    }

    async findAll(): Promise<FuncionarioDto[]>{
        const funcionarios = await this.funcionarioRepository.find();

        const funcionariosDto: FuncionarioDto[] = funcionarios.map(FuncionarioMapper.toDto);

        return funcionariosDto;
    }

    async save(createFuncionarioDto: CreateFuncionarioDto) {
        const hashPassword = await bcrypt.hash(createFuncionarioDto.password, GeralConfig.SALTROUND)

        const user : UserEntity = {
            username: createFuncionarioDto.nome,
            password: hashPassword,
        }

        const role: UserRoleEntity = {
            role: createFuncionarioDto.role,
            user: user,
        }

        this.userRoleRepository.save(role);

        await this.userRepository.save(user);

        const funcionario = CreateFuncionarioMapper.toEntity(createFuncionarioDto);
        funcionario.user = user;

        await this.funcionarioRepository.save(funcionario);
    }

}
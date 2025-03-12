import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FuncionarioDto } from "src/dto/funcionario.dto";
import { FuncionarioEntity } from "src/entity/funcionario.entity";
import { FuncionarioMapper } from "src/mapper/funcionario.mapper";
import { FuncionarioRepository } from "src/respository/funcionario.repository";

@Injectable()
export class FuncionarioService{

    constructor(
        @InjectRepository(FuncionarioEntity)
        private readonly funcionarioRepository: FuncionarioRepository
    ){}

    async findOneById(funcionarioId: Number): Promise<FuncionarioDto> {
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

}
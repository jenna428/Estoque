import { CreateFuncionarioDto } from "src/dto/create-funcionario.dto";
import { FuncionarioDto } from "src/dto/funcionario.dto";
import { FuncionarioEntity } from "src/entity/funcionario.entity";
import { FuncionarioMapper } from "./funcionario.mapper";
import { UserEntity } from "src/entity/user.entity";

export class CreateFuncionarioMapper {
    
    
    static toEntity(createFuncionarioDto: CreateFuncionarioDto): FuncionarioEntity {
        const funcionario: FuncionarioEntity = {
            nome: createFuncionarioDto?.nome,
            cep: createFuncionarioDto?.cep,
            cpf: createFuncionarioDto?.cpf,
            telefone: createFuncionarioDto?.telefone,
            email: createFuncionarioDto?.email
        }

        return funcionario;
    }
}
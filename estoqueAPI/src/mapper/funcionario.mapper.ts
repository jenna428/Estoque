import { FuncionarioDto } from "src/dto/funcionario.dto";
import { FuncionarioEntity } from "src/entity/funcionario.entity";

export class FuncionarioMapper{
    static toDto(funcionarioEntity: FuncionarioEntity): FuncionarioDto {
        const funcionarioDto: FuncionarioDto = {
            id: funcionarioEntity?.id,
            nome: funcionarioEntity?.nome,
            cep: funcionarioEntity?.cep,
            cpf: funcionarioEntity?.cpf,
            telefone: funcionarioEntity?.telefone,
            email: funcionarioEntity?.email,
            dataAdmissao: funcionarioEntity?.dataAdmissao
        }

        return funcionarioDto;
    }
    
    static toEntity(funcionarioDto: FuncionarioDto): FuncionarioEntity {
        const funcionarioEntity: FuncionarioEntity = {
            id: funcionarioDto?.id,
            nome: funcionarioDto?.nome,
            cep: funcionarioDto?.cep,
            cpf: funcionarioDto?.cpf,
            telefone: funcionarioDto?.telefone,
            email: funcionarioDto?.email,
            dataAdmissao: funcionarioDto?.dataAdmissao
        }

        return funcionarioEntity;
    }

}
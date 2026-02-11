import { CreateFuncionarioDto } from "src/dto/create-funcionario.dto";
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
        }

        return funcionarioDto;
    }
}
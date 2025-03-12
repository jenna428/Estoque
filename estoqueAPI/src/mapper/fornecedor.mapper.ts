import { FornecedorDto } from "src/dto/fornecedor.dto";
import { FornecedorEntity } from "src/entity/fornecedor.entity";

export class FornecedorMapper{

    static toDto(fornecedorEntity: FornecedorEntity): FornecedorDto{
        const fornecedorDto: FornecedorDto = {
            id: fornecedorEntity?.id,
            nome: fornecedorEntity?.nome,
            cnpj: fornecedorEntity?.cnpj,
            cep: fornecedorEntity?.cep,
            telefone: fornecedorEntity?.telefone,
            email: fornecedorEntity?.email,
            dataCadastro: fornecedorEntity?.dataCadastro,
        }
        return fornecedorDto;
    }

    static toEntity(fornecedorDto: FornecedorDto): FornecedorEntity{
        const fornecedorEntity: FornecedorEntity = {
            id: fornecedorDto?.id,
            nome: fornecedorDto?.nome,
            cnpj: fornecedorDto?.cnpj,
            cep: fornecedorDto?.cep,
            telefone: fornecedorDto?.telefone,
            email: fornecedorDto?.email,
            dataCadastro: fornecedorDto?.dataCadastro
        }
        return fornecedorEntity;
    }
}
import { DepartamentoDto } from "./departamento.dto";
import { FornecedorDto } from "./fornecedor.dto";

export interface TipoItemDto {
    id?: number;
    nome: String;
    departamento?: DepartamentoDto;
    preco: number;
    fornecedor: FornecedorDto;
}
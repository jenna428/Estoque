import { DepartamentoDto } from "./departamento.dto";
import { FornecedorDto } from "./fornecedor.dto";

export interface TipoItemDto {
    id: number;
    departamento: DepartamentoDto;
    nome: String;
    preco: number;
    fornecedor: FornecedorDto;
}
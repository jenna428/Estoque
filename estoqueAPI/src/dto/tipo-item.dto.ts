import { DepartamentoDto } from "./departamento.dto";
import { FornecedorDto } from "./fornecedor.dto";

export interface TipoItemDto {
    id: Number;
    departamento: DepartamentoDto;
    nome: String;
    preco: Number;
    fornecedor: FornecedorDto;
}
import { DepartamentoDto } from "./departamento.dto";
import { FornecedorDto } from "./fornecedor.dto";

export interface TipoItemDto {
    id?: Number;
    nome: String;
    departamento?: DepartamentoDto;
    preco: Number;
    fornecedor: FornecedorDto;
}
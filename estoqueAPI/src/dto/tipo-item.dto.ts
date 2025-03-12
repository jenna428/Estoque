import { DepartamentoDto } from "./departamento.dto";

export interface TipoItemDto {
    id: Number;
    departamento: DepartamentoDto;
    nome: String;
    preco: Number;
}
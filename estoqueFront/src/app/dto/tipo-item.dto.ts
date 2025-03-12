import { DepartamentoDto } from "./departamento.dto";

export interface TipoItemDto {
    id?: Number;
    nome: String;
    departamento?: DepartamentoDto;
    preco: Number;
}
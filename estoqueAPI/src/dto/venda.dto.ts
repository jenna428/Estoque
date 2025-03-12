import { FuncionarioDto } from "./funcionario.dto";

export interface VendaDto{
    id: Number;
    funcionario: FuncionarioDto;
    valorTotal: Number;
}
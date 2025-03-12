import { DepartamentoDto } from "./departamento.dto";
import { FornecedorDto } from "./fornecedor.dto";
import { FuncionarioDto } from "./funcionario.dto";
import { TipoItemDto } from "./tipo-item.dto";


export interface ItemDto {
    id: Number;
    //nome: String;
    //preco: number;
    //marca: String;
    codigoBarra: Number;
    //departamento: DepartamentoDto;
    tipo: TipoItemDto;
    fornecedor: FornecedorDto;
    //>>>>>>>>>>>>>
    funcionario: FuncionarioDto;
}

import { FuncionarioDto } from "./funcionario.dto";
import { TipoItemDto } from "./tipo-item.dto";


export interface ItemDto {
    id: Number;
    codigoBarra: Number;
    tipo: TipoItemDto;
}
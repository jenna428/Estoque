import { ItemDto } from "./item.dto";
import { VendaDto } from "./venda.dto";

export interface PrecoDto{
    id: Number;
    item: ItemDto;
    venda: VendaDto;
    valor: Number;
}
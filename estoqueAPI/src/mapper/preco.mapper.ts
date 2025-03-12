import { PrecoDto } from "src/dto/preco.dto";
import { PrecoEntity } from "src/entity/preco.entity";
import { ItemMapper } from "./item.mapper";
import { VendaMapper } from "./venda.mapper";

export class PrecoMapper{
    static toDto(precoEntity: PrecoEntity): PrecoDto{
        const precoDto: PrecoDto = {
            id: precoEntity?.id,
            item: ItemMapper.toDto(precoEntity?.item),
            venda: VendaMapper.toDto(precoEntity?.venda),
            valor: precoEntity?.valor
        }
        return precoDto;
    }
    
    static toEntity(precoDto: PrecoDto): PrecoEntity {
        const precoEntity: PrecoEntity = {
            id: precoDto?.id,
            item: ItemMapper.toEntity(precoDto?.item),
            venda: VendaMapper.toEntity(precoDto?.venda),
            valor: precoDto?.valor
        }
        return precoEntity;
    }
}
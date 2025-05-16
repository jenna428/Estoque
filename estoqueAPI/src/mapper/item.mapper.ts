import { ItemDto } from "src/dto/item.dto";
import { ItemEntity } from "src/entity/item.entity";
import { TipoItemMapper } from "./tipo-item.mapper";

export class ItemMapper {

    static toDto(itemEntity: ItemEntity): ItemDto {
        const itemDto: ItemDto = {
            id: itemEntity?.id,
            codigoBarra: itemEntity?.codigoBarra,
            tipo: TipoItemMapper.toDto(itemEntity?.tipo),
        }
        
        return itemDto;
    }

    static toEntity(itemDto: ItemDto): ItemEntity {
        const itemEntity: ItemEntity = {
            id: itemDto.id,
            codigoBarra: itemDto.codigoBarra,
            tipo: TipoItemMapper.toEntity(itemDto.tipo)
        }

        return itemEntity;
    }
}
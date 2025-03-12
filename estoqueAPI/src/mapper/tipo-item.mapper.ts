import { TipoItemDto } from "src/dto/tipo-item.dto";
import { TipoItemEntity } from "src/entity/tipo-item.entity";
import { DepartamentoMapper } from "./departamento.mapper";
import { DepartamentoEntity } from "src/entity/departamento.entity";

export class TipoItemMapper {

    static toDto(tipoItemEntity: TipoItemEntity): TipoItemDto {
        const tipoItemDto: TipoItemDto = {
            nome: tipoItemEntity?.nome,
            id: tipoItemEntity?.id,
            departamento: DepartamentoMapper.toDto(tipoItemEntity?.departamento),
            preco: tipoItemEntity?.preco
        }
        
        return tipoItemDto;
    }

    static toEntity(tipoItemDto: TipoItemDto): TipoItemEntity {
        const tipoItemEntity: TipoItemEntity = {
            nome: tipoItemDto.nome,
            id: tipoItemDto.id,
            departamento: DepartamentoMapper.toEntity(tipoItemDto?.departamento),
            preco: tipoItemDto?.preco
        }

        return tipoItemEntity;
    }
}
import { TipoItemDto } from "src/dto/tipo-item.dto";
import { TipoItemEntity } from "src/entity/tipo-item.entity";
import { DepartamentoMapper } from "./departamento.mapper";
import { DepartamentoEntity } from "src/entity/departamento.entity";
import { FornecedorMapper } from "./fornecedor.mapper";

export class TipoItemMapper {

    static toDto(tipoItemEntity: TipoItemEntity): TipoItemDto {
        const tipoItemDto: TipoItemDto = {
            nome: tipoItemEntity?.nome,
            id: tipoItemEntity?.id,
            departamento: DepartamentoMapper.toDto(tipoItemEntity?.departamento),
            preco: tipoItemEntity?.preco,
            fornecedor: FornecedorMapper.toDto(tipoItemEntity?.fornecedor)
        }
        
        return tipoItemDto;
    }

    static toEntity(tipoItemDto: TipoItemDto): TipoItemEntity {
        const tipoItemEntity: TipoItemEntity = {
            nome: tipoItemDto.nome,
            id: tipoItemDto.id,
            departamento: DepartamentoMapper.toEntity(tipoItemDto?.departamento),
            preco: tipoItemDto?.preco,
            fornecedor: FornecedorMapper.toEntity(tipoItemDto.fornecedor)
        }

        return tipoItemEntity;
    }
}
import { ItemDto } from "src/dto/item.dto";
import { ItemEntity } from "src/entity/item.entity";
import { DepartamentoMapper } from "./departamento.mapper";
import { TipoItemMapper } from "./tipo-item.mapper";
import { FornecedorMapper } from "./fornecedor.mapper";
import { FuncionarioMapper } from "./funcionario.mapper";

export class ItemMapper {

    static toDto(itemEntity: ItemEntity): ItemDto {
        const itemDto: ItemDto = {
            id: itemEntity?.id,
            //nome: itemEntity?.nome,
            //preco: itemEntity?.preco,
            //marca: itemEntity?.marca,
            codigoBarra: itemEntity?.codigoBarra,
            //departamento: DepartamentoMapper.toDto(itemEntity?.departamento),
            tipo: TipoItemMapper.toDto(itemEntity?.tipo),
            fornecedor: FornecedorMapper.toDto(itemEntity?.fornecedor),
            funcionario: FuncionarioMapper.toDto(itemEntity?.funcionario)
        }
        
        return itemDto;
    }

    static toEntity(itemDto: ItemDto): ItemEntity {
        const itemEntity: ItemEntity = {
            id: itemDto.id,
            //nome: itemDto.nome,
            //preco: itemDto.preco,
            //marca: itemDto.marca,
            codigoBarra: itemDto.codigoBarra,
            //departamento: DepartamentoMapper.toEntity(itemDto.departamento),
            tipo: TipoItemMapper.toEntity(itemDto.tipo),
            //fornecedor: null
            fornecedor: FornecedorMapper.toEntity(itemDto?.fornecedor),
            funcionario: FuncionarioMapper.toEntity(itemDto?.funcionario)
        }

        return itemEntity;
    }
}
import { VendaDto } from "src/dto/venda.dto";
import { VendaEntity } from "src/entity/venda.entity";
import { FuncionarioMapper } from "./funcionario.mapper";

export class VendaMapper{
    static toDto(vendaEntity: VendaEntity): VendaDto{
        const vendaDto: VendaDto = {
            id: vendaEntity?.id,
            funcionario: FuncionarioMapper.toDto(vendaEntity?.funcionario),
            valorTotal: vendaEntity?.valorTotal
        }
        return vendaDto;
    }
    
    static toEntity(vendaDto: VendaDto): VendaEntity {
        const vendaEntity: VendaEntity = {
            id: vendaDto?.id,
            funcionario: FuncionarioMapper.toEntity(vendaDto?.funcionario),
            valorTotal: vendaDto?.valorTotal
        }
        return vendaEntity;
    }
}
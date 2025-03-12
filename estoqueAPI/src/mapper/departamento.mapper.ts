import { DepartamentoDto } from "src/dto/departamento.dto";
import { DepartamentoEntity } from "src/entity/departamento.entity";

export class DepartamentoMapper {

    static toDto(departamentoEntity: DepartamentoEntity): DepartamentoDto {
        const departamentoDto: DepartamentoDto = {
            id: departamentoEntity?.id,
            nome: departamentoEntity?.nome
        }
        
        return departamentoDto;
    }

    static toEntity(departamentoDto: DepartamentoDto): DepartamentoEntity {
        const departamentoEntity: DepartamentoEntity = {
            id: departamentoDto.id,
            nome: departamentoDto.nome
        }

        return departamentoEntity;
    }
}
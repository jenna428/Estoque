import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoItemDto } from 'src/dto/tipo-item.dto';
import { ItemEntity } from 'src/entity/item.entity';
import { TipoItemEntity } from 'src/entity/tipo-item.entity';
import { TipoItemMapper } from 'src/mapper/tipo-item.mapper';
import { ItemRepository } from 'src/respository/item.repository';
import { TipoItemRepository } from 'src/respository/tipo-item.repository';
import { FindManyOptions } from 'typeorm';

@Injectable()
export class TipoItemService {

    constructor(
        @InjectRepository(TipoItemEntity)
        private readonly tipoItemRepository: TipoItemRepository,
    ) {}

    async findAll(): Promise<TipoItemDto[]>{
        const option = {relations: [ 'fornecedor']}
        const itens = await this.tipoItemRepository.find(option);
        
        const itensDto: TipoItemDto[] = itens.map(TipoItemMapper.toDto);

        return itensDto;
    }

    async filterSearch(search: String): Promise<TipoItemDto[]> {
            const option: FindManyOptions = {
                where:
                {
                    nome: search
                }
            }
            const itens = await this.tipoItemRepository.find(option);
            const itensDto: TipoItemDto[] = itens.map(TipoItemMapper.toDto);
    
            return itensDto; 
    }

    /*async OrderDesc(): Promise<TipoItemDto[]>{


            const option: FindManyOptions = {
                order:{

                }
            }
    }*/

    async save(tipoItemDto: TipoItemDto): Promise<TipoItemDto> {
        const item = await this.tipoItemRepository.save(TipoItemMapper.toEntity(tipoItemDto));

        return TipoItemMapper.toDto(item);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoItemDto } from 'src/dto/tipo-item.dto';
import { ItemEntity } from 'src/entity/item.entity';
import { TipoItemEntity } from 'src/entity/tipo-item.entity';
import { TipoItemMapper } from 'src/mapper/tipo-item.mapper';
import { ItemRepository } from 'src/respository/item.repository';
import { TipoItemRepository } from 'src/respository/tipo-item.repository';
import { FindManyOptions, Like } from 'typeorm';

@Injectable()
export class TipoItemService {

    constructor(
        @InjectRepository(TipoItemEntity)
        private readonly tipoItemRepository: TipoItemRepository,
    ) {}

    async findAll(): Promise<TipoItemDto[]>{
        const option = {relations: [ 'fornecedor', 'departamento']}
        const itens = await this.tipoItemRepository.find(option);
        
        const itensDto: TipoItemDto[] = itens.map(TipoItemMapper.toDto);

        return itensDto;
    }

    async filterSearch(search: String): Promise<TipoItemDto[]> {
        const option: FindManyOptions = {
            relations: ['departamento', 'fornecedor'],
            where:[
                {
                    nome: Like(`%${search}%`)
                },
                {
                    departamento: {
                        nome: Like (`%${search}%`)
                    }
                },
                {
                    fornecedor: {
                        nome: Like (`%${search}%`)
                    }
                }
            ]
        }
        const itens = await this.tipoItemRepository.find(option);
        const itensDto: TipoItemDto[] = itens.map(TipoItemMapper.toDto);
        return itensDto; 
    }

    async filterOrder(order: string): Promise<TipoItemDto[]>{
            const option: FindManyOptions = {
                relations: ['departamento', 'fornecedor'],
                order:{}
            }

            if(order === '0'){
                option.order = {}
            } else if (order === '1'){
                option.order = {
                    preco: 'ASC'
                }
            } else if (order === '2'){
                option.order = {
                    preco: 'DESC'
                }
            }

        const itens = await this.tipoItemRepository.find(option);
        const itensDto: TipoItemDto[] = itens.map(TipoItemMapper.toDto);
        return itensDto; 
    }

    async save(tipoItemDto: TipoItemDto): Promise<TipoItemDto> {
        const item = await this.tipoItemRepository.save(TipoItemMapper.toEntity(tipoItemDto));

        return TipoItemMapper.toDto(item);
    }
}

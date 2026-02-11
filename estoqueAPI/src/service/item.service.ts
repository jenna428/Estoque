import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemDto } from "src/dto/item.dto";
import { ItemEntity } from "src/entity/item.entity";
import { ItemMapper } from "src/mapper/item.mapper";
import { ItemRepository } from "src/respository/item.repository";
import { FindManyOptions, Like } from "typeorm";

@Injectable()
export class ItemService {

    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemRepository: ItemRepository
    ) {}

    async findOneById(itemId: number): Promise<ItemDto> {
        const item = await this.itemRepository.findOne({
            where: {id: itemId}
        })
    
        return ItemMapper.toDto(item); 
    }

    async delete(itemdId: number){
        await this.itemRepository.delete(itemdId);
    }

    async filterSearch(search: String): Promise<ItemDto[]> {
        const option: FindManyOptions = {
            relations: [ 'tipo'],
            where: [
                {
                    tipo: {
                    nome: Like(`%${search}%`)
                    }
                },
                {
                    codigoBarra: Like(`${search}%`)
                }
            ]
        }
        const itens = await this.itemRepository.find(option);
        const itensDto: ItemDto[] = itens.map(ItemMapper.toDto);

        return itensDto; 
    }
    
    //
    
    //

    async findAll(): Promise<ItemDto[]>{
        const option: FindManyOptions = {relations: ['tipo']}
        const itens = await this.itemRepository.find(option);

        const itensDto: ItemDto[] = itens.map(ItemMapper.toDto);

        return itensDto;
    }

    async save(itemDto: ItemDto): Promise<ItemDto> {
        console.log('Dto',itemDto);
        const item = await this.itemRepository.save(ItemMapper.toEntity(itemDto));
        console.log('Entity',item);

        return ItemMapper.toDto(item);
    }
}
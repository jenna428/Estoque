import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ItemDto } from "src/dto/item.dto";
import { ItemEntity } from "src/entity/item.entity";
import { ItemMapper } from "src/mapper/item.mapper";
import { ItemRepository } from "src/respository/item.repository";

@Injectable()
export class ItemService {

    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemRepository: ItemRepository
    ) {}

    async findOneById(itemId: Number): Promise<ItemDto> {
        const item = await this.itemRepository.findOne({
            where: {id: itemId}
        })
    
        return ItemMapper.toDto(item); 
    }

    async findAll(): Promise<ItemDto[]>{
        const option = {relations: [ 'tipo']}
        const itens = await this.itemRepository.find(option);

        /*const itensDto = [];

        itens.forEach((item) => {
           itensDto.push(ItemMapper.toDto(item));
        });*/

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
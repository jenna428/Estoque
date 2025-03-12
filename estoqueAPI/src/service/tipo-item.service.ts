import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoItemDto } from 'src/dto/tipo-item.dto';
import { TipoItemEntity } from 'src/entity/tipo-item.entity';
import { TipoItemMapper } from 'src/mapper/tipo-item.mapper';
import { TipoItemRepository } from 'src/respository/tipo-item.repository';

@Injectable()
export class TipoItemService {

    constructor(
        @InjectRepository(TipoItemEntity)
        private readonly tipoItemRepository: TipoItemRepository
    ) {}

    async findAll(): Promise<TipoItemDto[]>{
        const itens = await this.tipoItemRepository.find();

        const itensDto: TipoItemDto[] = itens.map(TipoItemMapper.toDto);

        return itensDto;
    }

    async save(tipoItemDto: TipoItemDto): Promise<TipoItemDto> {
        const item = await this.tipoItemRepository.save(TipoItemMapper.toEntity(tipoItemDto));

        return TipoItemMapper.toDto(item);
    }
}

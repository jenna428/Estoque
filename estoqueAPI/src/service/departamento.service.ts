import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartamentoDto } from 'src/dto/departamento.dto';
import { DepartamentoEntity } from 'src/entity/departamento.entity';
import { DepartamentoMapper } from 'src/mapper/departamento.mapper';
import { DepartamentoRepository } from 'src/respository/departamento.repository';

@Injectable()
export class DepartamentoService {

    constructor(
        @InjectRepository(DepartamentoEntity)
        private readonly departamentoRepository: DepartamentoRepository
    ) {}

    async findAll(): Promise<DepartamentoDto[]>{
        const departamentos = await this.departamentoRepository.find();

        const departamentoDtos: DepartamentoDto[] = departamentos.map(DepartamentoMapper.toDto);

        return departamentoDtos;
    }

    async save(DepartamentoDto: DepartamentoDto): Promise<DepartamentoDto> {
        const item = await this.departamentoRepository.save(DepartamentoMapper.toEntity(DepartamentoDto));

        return DepartamentoMapper.toDto(item);
    }
}
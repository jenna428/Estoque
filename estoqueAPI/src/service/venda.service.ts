import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { VendaDto } from "src/dto/venda.dto";
import { VendaEntity } from "src/entity/venda.entity";
import { VendaMapper } from "src/mapper/venda.mapper";
import { VendaRepository } from "src/respository/venda.repository";

@Injectable()
export class VendaService{

    constructor(
        @InjectRepository(VendaEntity)
        private readonly vendaRepository: VendaRepository
    ){}

    async findAll(): Promise<VendaDto[]>{
        const vendas = await this.vendaRepository.find();

        const vendasDto: VendaDto[] = vendas.map(VendaMapper.toDto);

        return vendasDto;
    }

}
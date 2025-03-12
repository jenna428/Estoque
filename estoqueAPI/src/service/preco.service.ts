import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PrecoDto } from "src/dto/preco.dto";
import { PrecoEntity } from "src/entity/preco.entity";
import { PrecoMapper } from "src/mapper/preco.mapper";
import { PrecoRepository } from "src/respository/preco.repository";

@Injectable()
export class PrecoService{

    constructor(
        @InjectRepository(PrecoEntity)
        private readonly precoRepository: PrecoRepository
    ){}

    async findAll(): Promise<PrecoDto[]>{
        const precos = await this.precoRepository.find();

        const precosDto: PrecoDto[] = precos.map(PrecoMapper.toDto);

        return precosDto;
    }

}
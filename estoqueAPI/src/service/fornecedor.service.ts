import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FornecedorDto } from "src/dto/fornecedor.dto";
import { FornecedorEntity } from "src/entity/fornecedor.entity";
import { FornecedorMapper } from "src/mapper/fornecedor.mapper";
import { FornecedorRepository } from "src/respository/fornecedor.repository";

@Injectable()
export class FornecedorService{

    constructor(
        @InjectRepository(FornecedorEntity)
        private readonly fornecedorRepository: FornecedorRepository
    ){}

    async findOneById(fornecedorId: Number): Promise<FornecedorDto> {
            const fornecedor = await this.fornecedorRepository.findOne({
                where: {id: fornecedorId}
            })
        
            return FornecedorMapper.toDto(fornecedor); 
    }

    async findAll(): Promise<FornecedorDto[]>{
        const fornecedores = await this.fornecedorRepository.find();

        const fornecedoresDto: FornecedorDto[] = fornecedores.map(FornecedorMapper.toDto);

        return fornecedoresDto;
    }

    /*async save(fornecedorDto: FornecedorDto): Promise<FornecedorDto[]>{
        const fornecedor = await this.fornecedorRepository.save(FornecedorMapper.toEntity(fornecedorDto));

        return FornecedorMapper.toDto(fornecedor);
    }*/

}
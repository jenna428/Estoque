import { Controller, Get, Param } from "@nestjs/common";
import { FornecedorDto } from "src/dto/fornecedor.dto";
import { FornecedorService } from "src/service/fornecedor.service";

@Controller('api/fornecedor')
export class FornecedorController{

    constructor(
            private readonly fornecedorService: FornecedorService
    ){}

    @Get('/:id')
    async findOneById(@Param('id') id: Number): Promise <FornecedorDto> {
        const fornecedor = await this.fornecedorService.findOneById(id)

        return fornecedor;
    }

    @Get('/')
    async findAll(): Promise<FornecedorDto[]> {
        const fornecedores = await this.fornecedorService.findAll();

        return fornecedores;
    }

}
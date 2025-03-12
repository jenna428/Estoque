import { Controller, Get, Param } from "@nestjs/common";
import { PrecoDto } from "src/dto/preco.dto";
import { PrecoService } from "src/service/preco.service";

@Controller('api/preco')
export class PrecoController{

    constructor(
            private readonly precoService: PrecoService
    ){}
    
    @Get('/')
    async findAll(): Promise<PrecoDto[]> {
        const precos = await this.precoService.findAll();

        return precos;
    }

}
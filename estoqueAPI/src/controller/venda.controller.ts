import { Controller, Get } from "@nestjs/common";
import { VendaDto } from "src/dto/venda.dto";
import { VendaService } from "src/service/venda.service";

@Controller('api/venda')
export class VendaController{

    constructor(
            private readonly vendaService: VendaService
    ){}
    
    @Get('/')
    async findAll(): Promise<VendaDto[]> {
        const vendas = await this.vendaService.findAll();

        return vendas;
    }

}
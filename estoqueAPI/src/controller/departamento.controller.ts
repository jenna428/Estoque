import { Body, Controller, Get, Post } from '@nestjs/common';
import { DepartamentoDto } from 'src/dto/departamento.dto';
import { DepartamentoService } from 'src/service/departamento.service';

@Controller('api/departamento')
export class DepartamentoController {

    constructor(
       private readonly departamentoService: DepartamentoService
    ){}

    @Get('/')
    async findAll(): Promise<DepartamentoDto[]> {
        const departamentos = await this.departamentoService.findAll();

        return departamentos;
    }

    @Post('/')
    async save(@Body() DepartamentoDto: DepartamentoDto): Promise<DepartamentoDto> {
        const departamento = await this.departamentoService.save(DepartamentoDto);

        return departamento;
    }
}

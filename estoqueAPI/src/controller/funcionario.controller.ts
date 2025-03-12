import { Controller, Get, Param } from "@nestjs/common";
import { FuncionarioDto } from "src/dto/funcionario.dto";
import { FuncionarioService } from "src/service/funcionario.service";

@Controller('api/funcionario')
export class FuncionaioController {

    constructor(
        private readonly funcionarioService: FuncionarioService
    ){}

    @Get('/:id')
    async findOneById(@Param('id') id: Number): Promise <FuncionarioDto> {
        const funcionario = await this.funcionarioService.findOneById(id)

        return funcionario;
    }

    @Get('/')
    async findAll(): Promise<FuncionarioDto[]> {
        const funcionarios = await this.funcionarioService.findAll();

        return funcionarios;
    }
}
import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/decorator/role.decorator";
import { CreateFuncionarioDto } from "src/dto/create-funcionario.dto";
import { FuncionarioDto } from "src/dto/funcionario.dto";
import { Role } from "src/enums/enums";
import { RolesGuard } from "src/guard/role.guard";
import { FuncionarioService } from "src/service/funcionario.service";

@Controller('api/funcionario')
export class FuncionaioController {

    constructor(
        private readonly funcionarioService: FuncionarioService
    ){}

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/:id')
    async findOneById(@Param('id') id: number): Promise <FuncionarioDto> {
        const funcionario = await this.funcionarioService.findOneById(id)

        return funcionario;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/')
    async findAll(): Promise<FuncionarioDto[]> {
        const funcionarios = await this.funcionarioService.findAll();

        return funcionarios;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN)
    @Post('/')
    async save(@Body() createFuncionarioDto: CreateFuncionarioDto) {
       await this.funcionarioService.save(createFuncionarioDto);
    }
}
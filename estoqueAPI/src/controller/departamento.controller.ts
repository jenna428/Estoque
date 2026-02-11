import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorator/role.decorator';
import { DepartamentoDto } from 'src/dto/departamento.dto';
import { Role } from 'src/enums/enums';
import { RolesGuard } from 'src/guard/role.guard';
import { DepartamentoService } from 'src/service/departamento.service';

@Controller('api/departamento')
export class DepartamentoController {

    constructor(
       private readonly departamentoService: DepartamentoService
    ){}

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/')
    async findAll(): Promise<DepartamentoDto[]> {
        const departamentos = await this.departamentoService.findAll();

        return departamentos;
    }
    
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Post('/')
    async save(@Body() DepartamentoDto: DepartamentoDto): Promise<DepartamentoDto> {
        const departamento = await this.departamentoService.save(DepartamentoDto);

        return departamento;
    }
}

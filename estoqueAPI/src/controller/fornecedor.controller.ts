import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/decorator/role.decorator";
import { FornecedorDto } from "src/dto/fornecedor.dto";
import { Role } from "src/enums/enums";
import { RolesGuard } from "src/guard/role.guard";
import { FornecedorService } from "src/service/fornecedor.service";

@Controller('api/fornecedor')
export class FornecedorController{

    constructor(
            private readonly fornecedorService: FornecedorService
    ){}
    
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/:id')
    async findOneById(@Param('id') id: number): Promise <FornecedorDto> {
        const fornecedor = await this.fornecedorService.findOneById(id)

        return fornecedor;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/')
    async findAll(): Promise<FornecedorDto[]> {
        const fornecedores = await this.fornecedorService.findAll();

        return fornecedores;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN)
    @Post('/')
    async save(@Body() fornecedorDto: FornecedorDto): Promise<FornecedorDto>{
        const fornecedor = await this.fornecedorService.save(fornecedorDto);

        return fornecedor;
    }

}

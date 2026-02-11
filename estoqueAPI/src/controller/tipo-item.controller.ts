import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/decorator/role.decorator';
import { TipoItemDto } from 'src/dto/tipo-item.dto';
import { Role } from 'src/enums/enums';
import { RolesGuard } from 'src/guard/role.guard';
import { TipoItemService } from 'src/service/tipo-item.service';

@Controller('api/tipo-item')
export class TipoItemController {

    constructor(
       private readonly tipoItemService: TipoItemService
    ){}

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/')
    async findAll(): Promise<TipoItemDto[]> {
        const tipo = await this.tipoItemService.findAll();

        return tipo;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/filter-search/:search')
    async test(@Param('search') search: string): Promise<TipoItemDto[]> {
        const itens = await this.tipoItemService.filterSearch(search);

        return itens;
    }

    // 🔍 Busca / filtro / paginação → @Query()
    // 🆔 Identificar recurso (id) → @Param()

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/filter-order/:order')
    async order(@Param('order') order: string): Promise<TipoItemDto[]> {
        const itens = await this.tipoItemService.filterOrder(order);

        return itens;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Post('/')
    async save(@Body() TipoItemDto: TipoItemDto): Promise<TipoItemDto> {
        const tipo = await this.tipoItemService.save(TipoItemDto);

        return tipo;
    }

}

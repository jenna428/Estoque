import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TipoItemDto } from 'src/dto/tipo-item.dto';
import { TipoItemService } from 'src/service/tipo-item.service';

@Controller('api/tipo-item')
export class TipoItemController {

    constructor(
       private readonly tipoItemService: TipoItemService
    ){}

    @Get('/')
    async findAll(): Promise<TipoItemDto[]> {
        const tipo = await this.tipoItemService.findAll();

        return tipo;
    }

    @Get('/filter-search/:search')
    async test(@Param('search') search: string): Promise<TipoItemDto[]> {
        const itens = await this.tipoItemService.filterSearch(search);

        return itens;
    }

    @Post('/')
    async save(@Body() TipoItemDto: TipoItemDto): Promise<TipoItemDto> {
        const tipo = await this.tipoItemService.save(TipoItemDto);

        return tipo;
    }

}

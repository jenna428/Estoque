import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Post('/')
    async save(@Body() TipoItemDto: TipoItemDto): Promise<TipoItemDto> {
        const tipo = await this.tipoItemService.save(TipoItemDto);

        return tipo;
    }
}

import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import { Request } from "express";
import { ItemDto } from "src/dto/item.dto";
import { ItemService } from "src/service/item.service";

@Controller('api/item')
export class ItemController {
    constructor(
        private readonly itemService: ItemService
    ){}

    @Get('/:id')
    async findOneById(@Param('id') id: Number): Promise<ItemDto> {
        const item = await this.itemService.findOneById(id);

        return item;
    }

    @Get('/')
    async findAll(): Promise<ItemDto[]> {
        const itens = await this.itemService.findAll();

        return itens;
    }

    @Get('/teste/:search')
    async test(@Param('search') search: string): Promise<ItemDto[]> {
        //const itens = await this.itemService.findAll();
        //const itens = await this.itemService.filterSearch(req.params.search);
        const itens = await this.itemService.filterSearch(search);

        return itens;
    }

    @Get('/filter-search')
    async filterSearch(): Promise<ItemDto[]> {
        //console.log('teste', req);
        //const itens = await this.itemService.filterSearch(req.params.search);
 
        return [];
    }

    @Post('/')
    async save(@Body() itemDto: ItemDto): Promise<ItemDto> {
        const item = await this.itemService.save(itemDto);

        return item;
    }
}

// para obter um, url: http://localhost:3000/api/item/0
// para obter todos, url: http://localhost:3000/api/item/
// para savar um, url: http://localhost:3000/api/item/
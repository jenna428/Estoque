import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
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
    async filterSearch(@Req() req: Request): Promise<ItemDto[]> {

        const itens = await this.itemService.findAll();

        return itens;
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
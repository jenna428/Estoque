import { Body, Controller, Delete, Get, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/decorator/role.decorator";
import { ItemDto } from "src/dto/item.dto";
import { Role } from "src/enums/enums";
import { RolesGuard } from "src/guard/role.guard";
import { ItemService } from "src/service/item.service";

@Controller('api/item')
export class ItemController {
    constructor(
        private readonly itemService: ItemService
    ){}

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/')
    async findAll(): Promise<ItemDto[]> {
        const itens = await this.itemService.findAll();

        return itens;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/:id')
    async findOneById(@Param('id') id: number): Promise<ItemDto> {
        const item = await this.itemService.findOneById(id);

        return item;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/teste/:search')
    async test(@Param('search') search: string): Promise<ItemDto[]> {
        //const itens = await this.itemService.findAll();
        //const itens = await this.itemService.filterSearch(req.params.search);
        const itens = await this.itemService.filterSearch(search);

        return itens;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Get('/filter-search')
    async filterSearch(): Promise<ItemDto[]> {
        //console.log('teste', req);
        //const itens = await this.itemService.filterSearch(req.params.search);
 
        return [];
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Post('/')
    async save(@Body() itemDto: ItemDto): Promise<ItemDto> {
        const item = await this.itemService.save(itemDto);

        return item;
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.EMPLOYEE)
    @Delete('/:id')
    async deleteItem(@Param('id') id: number){
        await this.itemService.delete(id)
    }

}

// para obter um, url: http://localhost:3000/api/item/0
// para obter todos, url: http://localhost:3000/api/item/
// para savar um, url: http://localhost:3000/api/item/
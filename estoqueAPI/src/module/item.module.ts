import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from 'src/controller/item.controller';
import { ItemEntity } from 'src/entity/item.entity';
import { ItemService } from 'src/service/item.service';
import { DepartamentoModule } from './departamento.module';

@Module({
    imports: [TypeOrmModule.forFeature([ItemEntity]), DepartamentoModule],
    controllers: [ItemController],
    providers: [ItemService]
})
export class ItemModule {}

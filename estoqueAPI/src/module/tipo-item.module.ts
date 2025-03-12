import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoItemController } from 'src/controller/tipo-item.controller';
import { TipoItemEntity } from 'src/entity/tipo-item.entity';
import { TipoItemRepository } from 'src/respository/tipo-item.repository';
import { TipoItemService } from 'src/service/tipo-item.service';

@Module({
    imports: [TypeOrmModule.forFeature([TipoItemEntity])],
    controllers: [TipoItemController],
    providers: [TipoItemService, TipoItemRepository]
})
export class TipoItemModule {}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VendaController } from "src/controller/venda.controller";
import { VendaEntity } from "src/entity/venda.entity";
import { VendaService } from "src/service/venda.service";

@Module({
    imports: [TypeOrmModule.forFeature([VendaEntity])],
    controllers: [VendaController],
    providers: [VendaService]
})
export class VendaModule {}
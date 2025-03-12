import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FornecedorController } from "src/controller/fornecedor.controller";
import { FornecedorEntity } from "src/entity/fornecedor.entity";
import { FornecedorService } from "src/service/fornecedor.service";

@Module({
    imports: [TypeOrmModule.forFeature([FornecedorEntity])],
    controllers: [FornecedorController],
    providers: [FornecedorService]
})
export class FornecedorModule {}

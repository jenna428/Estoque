import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrecoController } from "src/controller/preco.controller";
import { PrecoEntity } from "src/entity/preco.entity";
import { PrecoService } from "src/service/preco.service";

@Module({
    imports: [TypeOrmModule.forFeature([PrecoEntity])],
    controllers: [PrecoController],
    providers: [PrecoService]
})
export class PrecoModule {}
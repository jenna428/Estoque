import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FuncionaioController } from "src/controller/funcionario.controller";
import { FuncionarioEntity } from "src/entity/funcionario.entity";
import { FuncionarioService } from "src/service/funcionario.service";

@Module({
    imports: [TypeOrmModule.forFeature([FuncionarioEntity])],
    controllers: [FuncionaioController],
    providers: [FuncionarioService]
})
export class FunconarioModule {}
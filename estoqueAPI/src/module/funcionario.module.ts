import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FuncionaioController } from "src/controller/funcionario.controller";
import { FuncionarioEntity } from "src/entity/funcionario.entity";
import { UserRoleEntity } from "src/entity/user-role.entity";
import { UserEntity } from "src/entity/user.entity";
import { RolesGuard } from "src/guard/role.guard";
import { UserRoleRepository } from "src/respository/user-role.repository";
import { UserRepository } from "src/respository/user.repository";
import { FuncionarioService } from "src/service/funcionario.service";

@Module({
    imports: [TypeOrmModule.forFeature([FuncionarioEntity, UserEntity, UserRoleEntity])],
    controllers: [FuncionaioController],
    providers: [FuncionarioService, UserRepository, UserRoleRepository, RolesGuard]
})
export class FunconarioModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './module/item.module';
import { ormConfig } from './config/ormConfig';
import { DepartamentoModule } from './module/departamento.module';
import { TipoItemModule } from './module/tipo-item.module';
import { FornecedorModule } from './module/fornecedor.module';
import { FunconarioModule } from './module/funcionario.module';
import { AuthModule } from './module/auth.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from './module/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guard/role.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ItemModule,
    DepartamentoModule,
    TipoItemModule,
    FunconarioModule,
    FornecedorModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
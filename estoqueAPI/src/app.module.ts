import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './module/item.module';
import { ormConfig } from './config/ormConfig';
import { DepartamentoModule } from './module/departamento.module';
import { TipoItemModule } from './module/tipo-item.module';
import { FornecedorModule } from './module/fornecedor.module';
import { FunconarioModule } from './module/funcionario.module';
import { PrecoModule } from './module/preco.module';
import { VendaModule } from './module/venda.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ItemModule,
    DepartamentoModule,
    TipoItemModule,
    FunconarioModule,
    FornecedorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
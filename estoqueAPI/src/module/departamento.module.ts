import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoController } from 'src/controller/departamento.controller';
import { DepartamentoEntity } from 'src/entity/departamento.entity';
import { DepartamentoRepository } from 'src/respository/departamento.repository';
import { DepartamentoService } from 'src/service/departamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([DepartamentoEntity])],
  controllers: [DepartamentoController],
  providers: [DepartamentoService, DepartamentoRepository]
})
export class DepartamentoModule {}

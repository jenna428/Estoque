import { Injectable } from "@nestjs/common";
import { DepartamentoEntity } from "src/entity/departamento.entity";
import { Repository } from "typeorm";

@Injectable()
export class DepartamentoRepository extends Repository<DepartamentoEntity> {}
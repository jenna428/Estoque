import { Injectable } from "@nestjs/common";
import { VendaEntity } from "src/entity/venda.entity";
import { Repository } from "typeorm";

@Injectable()
export class VendaRepository extends Repository<VendaEntity> {}
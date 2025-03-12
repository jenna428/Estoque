import { Injectable } from "@nestjs/common";
import { PrecoEntity } from "src/entity/preco.entity";
import { Repository } from "typeorm";

@Injectable()
export class PrecoRepository extends Repository<PrecoEntity> {}
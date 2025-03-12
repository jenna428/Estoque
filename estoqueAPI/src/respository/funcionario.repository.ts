import { Injectable } from "@nestjs/common";
import { FuncionarioEntity } from "src/entity/funcionario.entity";
import { Repository } from "typeorm";

@Injectable()
export class FuncionarioRepository extends Repository<FuncionarioEntity> {}
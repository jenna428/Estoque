import { Injectable } from "@nestjs/common";
import { FornecedorEntity } from "src/entity/fornecedor.entity";
import { Repository } from "typeorm";

@Injectable()
export class FornecedorRepository extends Repository<FornecedorEntity> {}
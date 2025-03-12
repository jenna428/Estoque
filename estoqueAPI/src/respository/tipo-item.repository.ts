import { Injectable } from "@nestjs/common";
import { TipoItemEntity } from "src/entity/tipo-item.entity";
import { Repository } from "typeorm";

@Injectable()
export class TipoItemRepository extends Repository<TipoItemEntity> {}
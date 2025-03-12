import { Injectable } from "@nestjs/common";
import { ItemEntity } from "src/entity/item.entity";
import { Repository } from "typeorm";

@Injectable()
export class ItemRepository extends Repository<ItemEntity> {}
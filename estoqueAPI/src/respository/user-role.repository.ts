import { Injectable } from "@nestjs/common";
import { UserRoleEntity } from "src/entity/user-role.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRoleRepository extends Repository<UserRoleEntity> {}
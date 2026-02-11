import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<UserEntity> {

    findByUsername(username: string): Promise<UserEntity> {
        return this.findOne({
            where: {username: username}
        })
    }
}
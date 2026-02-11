import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { FuncionarioEntity } from "./funcionario.entity";
import { Role } from "src/enums/enums";
import { UserRoleEntity } from "./user-role.entity";


@Entity('user')
export class UserEntity extends BaseEntity {
    @Column({length: 50, nullable: false})
    username: String;

    @Column({nullable: false}) 
    password: String;

    @OneToMany(() => UserRoleEntity, role => role.user)
    roles?: UserRoleEntity[];
}


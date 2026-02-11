import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "src/enums/enums";
import { UserEntity } from "./user.entity";


@Entity('userRole')
export class UserRoleEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    role: Role;

    @ManyToOne(user => UserEntity)
    user: UserEntity;
}


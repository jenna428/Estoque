import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity('funcionario')
export class FuncionarioEntity extends BaseEntity {
    @Column({length: 50, nullable: true})
    nome: String;

    @Column({nullable: true})
    cpf: number;

    @Column({nullable: true})
    cep: number;
    
    @Column({nullable: true})
    telefone: number;

    @Column({length: 50, nullable: true})
    email: String;
    
    @OneToOne(type => UserEntity)
    user?: UserEntity
}
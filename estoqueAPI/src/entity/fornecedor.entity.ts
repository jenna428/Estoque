import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('fornecedor')
export class FornecedorEntity extends BaseEntity {
    @Column({length: 30, nullable: true})
    nome: String;

    @Column({nullable: true})
    cnpj: number;

    @Column({nullable: true})
    cep: number;

    @Column({nullable: true})
    telefone: number;

    @Column({length: 50, nullable: true})
    email: String;
}
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('departamento')
export class DepartamentoEntity extends BaseEntity {
    @Column({length: 50, nullable: true})
    nome: String;
}


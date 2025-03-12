import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { FuncionarioEntity } from "./funcionario.entity";

@Entity('venda')
export class VendaEntity{
    @PrimaryGeneratedColumn()
    id?: Number;

    @Column({nullable: true})
    valorTotal: Number;

    @ManyToOne(type => FuncionarioEntity)
    funcionario: FuncionarioEntity
}
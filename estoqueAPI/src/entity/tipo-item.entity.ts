import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DepartamentoEntity } from "./departamento.entity";
import { FornecedorEntity } from "./fornecedor.entity";
import { BaseEntity } from "./base.entity";


@Entity('tipoItem')
export class TipoItemEntity extends BaseEntity {
    @Column({length: 50, nullable: true})
    nome: String;

    @ManyToOne( type => DepartamentoEntity)
    departamento: DepartamentoEntity;

    @Column('real', { nullable: true })
    preco: number;

    @ManyToOne(type => FornecedorEntity)
    fornecedor: FornecedorEntity;
}


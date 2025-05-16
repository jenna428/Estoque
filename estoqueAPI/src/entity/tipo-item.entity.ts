import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DepartamentoEntity } from "./departamento.entity";
import { FornecedorEntity } from "./fornecedor.entity";


@Entity('tipoItem')
export class TipoItemEntity {
    @PrimaryGeneratedColumn()
    id?: Number;

    @Column({length: 50, nullable: true})
    nome: String;

    @CreateDateColumn({ type: 'datetime' })
    dataCriado?: Date;

    @UpdateDateColumn({ type: 'datetime' })
    dataAtualizado?: Date;

    @ManyToOne( type => DepartamentoEntity)
    departamento: DepartamentoEntity;

    @Column({ nullable: true })
    preco: Number;

    @ManyToOne(type => FornecedorEntity)
    fornecedor: FornecedorEntity;

}


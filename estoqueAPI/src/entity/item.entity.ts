import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DepartamentoEntity } from "./departamento.entity";
import { TipoItemEntity } from "./tipo-item.entity";
import { FuncionarioEntity } from "./funcionario.entity";
import { FornecedorEntity } from "./fornecedor.entity";

/*var option: ColumnOptions;
option.length = 50;
option.nullable = true;*/


@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn() //chave primaria
    id?: Number;

    /*@Column({length: 50, nullable: true})
    nome: String;*/

    /*@Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    preco: number;*/

    /*@Column({length: 50, nullable: true})
    marca: String;*/

    @CreateDateColumn({ type: 'datetime' })
    dataCriado?: Date;

    @UpdateDateColumn({ type: 'datetime' })
    dataAtualizado?: Date;

    @Column({nullable: true})
    codigoBarra: Number;

    /*@ManyToOne(type => DepartamentoEntity)
    departamento: DepartamentoEntity;*/

    @ManyToOne(type => TipoItemEntity)
    tipo: TipoItemEntity;

    @ManyToOne(type => FuncionarioEntity)
    funcionario: FuncionarioEntity

    @ManyToOne(type => FornecedorEntity)
    fornecedor: FornecedorEntity

    // @ManyToOne(type => FornecedorEntity)
    // @JoinTable()
    // fornecedor: FornecedorEntity
}


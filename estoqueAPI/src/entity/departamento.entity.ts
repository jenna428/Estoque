import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('departamento')
export class DepartamentoEntity {
    @PrimaryGeneratedColumn() //chave primaria
    id?: Number;

    @Column({length: 50, nullable: true})
    nome: String;

    @CreateDateColumn({ type: 'datetime' })
    dataCriado?: Date;

    @UpdateDateColumn({ type: 'datetime' })
    dataAtualizado?: Date;
}


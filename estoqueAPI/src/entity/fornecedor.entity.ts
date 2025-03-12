import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('fornecedor')
export class FornecedorEntity {
    @PrimaryGeneratedColumn()
    id?: Number
    
    @Column({length: 30, nullable: true})
    nome: String;

    @Column({nullable: true})
    cnpj: Number;

    @Column({nullable: true})
    cep: Number;

    @Column({nullable: true})
    telefone: Number;

    @Column({length: 50, nullable: true})
    email: String;

    @CreateDateColumn({type: 'datetime'})
    dataCadastro?: Date;
    // @OneToMany(type => ItemEntity, item => item.fornecedor)
    // itens: ItemEntity[]
}
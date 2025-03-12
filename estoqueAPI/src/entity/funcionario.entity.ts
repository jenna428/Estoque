import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('funcionario')
export class FuncionarioEntity{
    @PrimaryGeneratedColumn()
    id?: Number;

    @Column({length: 50, nullable: true})
    nome: String;

    @Column({nullable: true})
    cpf: Number;

    @Column({nullable: true})
    cep: Number;
    
    @Column({nullable: true})
    telefone: Number;

    @Column({length: 50, nullable: true})
    email: String;

    @CreateDateColumn({type: 'datetime'})
    dataAdmissao?: Date;
}
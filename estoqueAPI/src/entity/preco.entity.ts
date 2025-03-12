import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ItemEntity } from "./item.entity";
import { VendaEntity } from "./venda.entity";

@Entity('preco')
export class PrecoEntity{
    @PrimaryGeneratedColumn()
    id?: Number;

    @Column({nullable: true})
    valor: Number;

    @ManyToOne(type => ItemEntity)
    item: ItemEntity

    @ManyToOne(type => VendaEntity)
    venda: VendaEntity
}
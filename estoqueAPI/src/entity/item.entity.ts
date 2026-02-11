import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TipoItemEntity } from "./tipo-item.entity";
import { BaseEntity } from "./base.entity";

@Entity('item')
export class ItemEntity extends BaseEntity {
    @Column({nullable: true})
    codigoBarra: number;

    @ManyToOne(type => TipoItemEntity)
    tipo: TipoItemEntity;
}


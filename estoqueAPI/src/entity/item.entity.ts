import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TipoItemEntity } from "./tipo-item.entity";



@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id?: Number;

    @CreateDateColumn({ type: 'datetime' })
    dataCriado?: Date;

    @UpdateDateColumn({ type: 'datetime' })
    dataAtualizado?: Date;

    @Column({nullable: true})
    codigoBarra: Number;

    @ManyToOne(type => TipoItemEntity)
    tipo: TipoItemEntity;
}


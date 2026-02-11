import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn({ type: 'datetime' })
    dataCriado?: Date;

    @UpdateDateColumn({ type: 'datetime' })
    dataAtualizado?: Date;
}


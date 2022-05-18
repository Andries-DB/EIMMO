import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";


@Entity()
export default class Immo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    name: string | undefined;

    @Column()
    contactEmail: string | undefined;

    @Column()
    contactName: string | undefined;
}
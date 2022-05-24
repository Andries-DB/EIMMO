import { IsDefined } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";


@Entity()
export default class Immo extends BaseEntity {
    @IsDefined()
    @PrimaryGeneratedColumn()
    id : number;

    @IsDefined()
    @Column()
    type : string;

    @IsDefined()
    @Column()
    title : string;

    @IsDefined()
    @Column()
    price : number;

    @IsDefined()
    @Column()
    src : string;

    @IsDefined()
    @Column()
    adress : string;

    @IsDefined()
    @Column()
    size : number;

    @IsDefined()
    @Column()
    amountBedrooms : number;

    @IsDefined()
    @Column()
    amountBathrooms : number;

    @IsDefined()
    @Column()
    garden : boolean;
    
}
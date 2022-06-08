import { IsDefined } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";


@Entity()
export default class Favorite extends BaseEntity {
    @IsDefined()
    @PrimaryGeneratedColumn()
    id : number;

    @IsDefined()
    @Column()
    user_id : number;

    @IsDefined()
    @Column()
    immo_id : number;

    
}
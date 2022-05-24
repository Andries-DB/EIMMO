import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { IsDefined, IsEmail } from "class-validator";

@Entity()
export default class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id;

    @IsDefined()
    @Column()
    name : string;

    @IsDefined()
    @IsEmail()
    @Column({unique:true})
    contactEmail : string;
    
    @IsDefined()
    @Column()
    contactName : string;

}

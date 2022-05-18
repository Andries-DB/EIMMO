import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { IsDefined, IsEmail } from "class-validator";

@Entity()
export default class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @IsDefined()
    @Column()
    name: string | undefined;

    @IsDefined()
    @IsEmail()
    @Column()
    contactEmail: string | undefined;

    @IsDefined()
    @Column()
    contactName: string | undefined;

}

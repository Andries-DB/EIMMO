import { IsDefined } from "class-validator";
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Admin from "../Admin/Admin.entity";
import { BaseEntity } from "../BaseEntity";
import Immo from "../Immo/Immo.entity";


@Entity()
export default class Favorite extends BaseEntity {
    @IsDefined()
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(() => Admin, (admin) => admin.name)
    user_id: Admin

    @ManyToOne(() => Immo, (immo) => immo.title)
    immo_id: Immo

}
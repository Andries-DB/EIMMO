import { compare, hash } from "bcrypt";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import Favorite from "../Favorites/Favorite.entity";
import { AdminRole } from "./Admin.constants";

@Entity()
export default class Admin extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    contactName: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column({
        type: "enum",
        enum: AdminRole,
        default: AdminRole.User,
    })
    role: AdminRole;

    @OneToMany(() => Favorite, (favorite) => favorite.user_id, {
        cascade: true,
    })
    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await hash(this.password, 10);
        }
    }

    async checkPassword(passwordToCheck: string) {
        return await compare(passwordToCheck, this.password);
    }
}
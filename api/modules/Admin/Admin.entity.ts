import { compare, hash } from "bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { AdminRole } from "./Admin.constants";

@Entity()
export default class Admin extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    name: string | undefined;

    @Column()
    surname: string | undefined;

    @Column({ unique: true })
    email: string | undefined;

    @Column({ select: false })
    password: string | undefined;

    @Column({
        type: "enum",
        enum: AdminRole,
        default: AdminRole.Admin,
    })
    role: AdminRole | undefined;

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
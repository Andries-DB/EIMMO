import { compare, hash } from "bcrypt";
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { IsDefined, IsEmail } from "class-validator";
import { AdminRole } from "../Admin/Admin.constants";

@Entity()
export default class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @IsDefined()
    @Column()
    name : string;

    @IsDefined()
    @IsEmail()
    @Column({unique:true})
    email : string;
    
    @IsDefined()
    @Column()
    contactName : string;

    @Column({ select: false })
    password: string;

    @Column({
        type: "enum",
        enum: AdminRole,
        default: AdminRole.User,
    })
    role: AdminRole;

    
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

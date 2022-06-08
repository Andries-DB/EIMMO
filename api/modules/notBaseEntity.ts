import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
    @CreateDateColumn({ select: false })
    createdAt;
    @UpdateDateColumn({ select: false })
    updatedAt;

    @DeleteDateColumn({ select: false })
    deletedAt;
}
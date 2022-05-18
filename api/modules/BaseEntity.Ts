import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @CreateDateColumn({ select: false })
    createdAt: Date | undefined;

    @UpdateDateColumn({ select: false })
    updatedAt: Date | undefined;

    @DeleteDateColumn({ select: false })
    deletedAt: Date | undefined;
}
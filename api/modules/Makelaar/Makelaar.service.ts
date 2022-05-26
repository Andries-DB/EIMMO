import { Repository } from "typeorm";

import { AppDataSource } from "../../database/DataSource";
import Makelaar from "./Makelaar.entity";

export default class MakelaarService {
    private repository: Repository<Makelaar>;

    constructor() {
        const repository = AppDataSource.getRepository(Makelaar);
        this.repository = repository;
    }

    all = async () => {
        // don't show password
        const users = await this.repository.find();
        return users;
    };

    findOne = async (id: number) => {
        const user = await this.repository.findOneBy({ id });
        return user;
    };

    findOneBy = async (options: object) => {
        const user = await this.repository.findOneBy(options);
        return user;
    };

    findByEmailWithPassword = async (email: string) => {
        const user = await this.repository
            .createQueryBuilder("user")
            .where("user.email = :email", { email })
            .select("user.password")
            .getOne();
        return user;
    };

    create = async (body : object) => {
        const user = await this.repository.save(this.repository.create(body));
        return user;
    };

    update = async (id: number, body: object) => {
        let user = await this.findOne(id);
        if (user) {
            user = await this.repository.save({ ...user, ...body });
        }
        return user;
    };

    delete = async (id: number) => {
        const user = await this.findOne(id);
        if (user) {
            await this.repository.softDelete({ id });
        }
        return user;
    };
}

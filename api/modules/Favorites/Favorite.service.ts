import { Repository } from "typeorm";

import { AppDataSource } from "../../database/DataSource";
import Favorite from "./Favorite.entity";
import { FavoriteBody } from "./Favorite.types";

export default class FavoriteService {
    private repository: Repository<Favorite>;

    constructor() {
        this.repository = AppDataSource.getRepository(Favorite);
    }

    all = async (user_id: any) => {
        const immos = await this.repository.findBy(user_id);
        return immos;
    };

    findOne = async (user_id: number, immo_id: number) => {
        const immo = await this.repository.findOneBy({ user_id , immo_id});
        return immo;
    };
    create = async (body: FavoriteBody) => {
        const immo = await this.repository.save(this.repository.create(body));
        return immo;
    };

    delete = async (user_id: number , immo_id:number) => {
        const immo = await this.findOne(user_id, immo_id);
        if (immo) {
            await this.repository.softDelete({ user_id, immo_id });
        }
        return immo;
    };

}
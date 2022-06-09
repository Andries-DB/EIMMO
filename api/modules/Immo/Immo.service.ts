import { Repository } from "typeorm";
import { AppDataSource } from "../../database/DataSource";
import Immo from "./Immo.entity";
import { ImmoBody } from "./Immo.types";

export default class ImmoService {
    private repository: Repository<Immo>;

    constructor() {
        this.repository = AppDataSource.getRepository(Immo);
    }

    all = async () => {
        const immos = await this.repository.find();
        return immos;
    };

    findOne = async (id: number) => {
        const immo = await this.repository.findOneBy({ id });
        return immo;
    };
    create = async (body: ImmoBody) => {
        const immo = await this.repository.save(this.repository.create(body));
        return immo;
    };

    update = async (id: number, body: ImmoBody) => {
        let immo = await this.findOne(id);
        if (immo) {
            immo = await this.repository.save({ ...immo, ...body });
        }
        return immo;
    };

    delete = async (id: number) => {
        const immo = await this.findOne(id);
        if (immo) {
            await this.repository.softDelete({ id });
        }
        return immo;
    };

}
import "reflect-metadata";
import { DataSource } from "typeorm";
import Client from "../modules/Client/Client.entity";
import Admin from "../modules/Admin/Admin.entity";
import Immo from "../modules/Immo/Immo.entity";
import Makelaar from "../modules/Makelaar/Makelaar.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Client, Admin, Immo, Makelaar],
    migrations: [],
    subscribers: [],
});
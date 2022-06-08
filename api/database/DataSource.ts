import "reflect-metadata";
import { DataSource } from "typeorm";
import Admin from "../modules/Admin/Admin.entity";
import Favorite from "../modules/Favorites/Favorite.entity";
import Immo from "../modules/Immo/Immo.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [ Admin, Immo, Favorite],
    migrations: [],
    subscribers: [],
    ...(process.env.ENV === "production"
        ? {
              ssl: {
                  rejectUnauthorized: false,
              },
          }
        : {}),
});
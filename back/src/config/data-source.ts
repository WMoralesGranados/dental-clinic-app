import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from "../config/envs";
import { Credential } from "../entities/Credential";
import { Appt } from "../entities/Appt";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appt],
    subscribers: [],
    migrations: [],
})

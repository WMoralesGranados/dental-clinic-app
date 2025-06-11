import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Slytherin*!92",
    database: "dental_clinic",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})


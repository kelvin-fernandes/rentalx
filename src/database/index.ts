import { createConnection } from "typeorm";

createConnection();

// export const dataSource = new DataSource({
//   type: "postgres",
//   host: "database",
//   port: 5432,
//   username: "docker",
//   password: "ignite",
//   database: "rentalx",
//   migrations: ["src/database/migrations/*.ts"],
// }).initialize();

// dataSource.initialize();

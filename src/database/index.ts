import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "db_ignite",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentalx",
});

dataSource.initialize();

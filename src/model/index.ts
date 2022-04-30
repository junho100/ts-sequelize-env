import { Sequelize } from "sequelize";
import { config } from "../../config/config";

const Table = require("./table");

export const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "mysql",
  }
);

Table.init(sequelize);

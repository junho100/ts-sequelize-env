import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: "test",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
  },
};

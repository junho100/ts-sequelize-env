require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: "test",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
  },
};

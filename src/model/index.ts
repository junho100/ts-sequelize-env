const Sequelize = require("sequelize");
const config = require("../../config/config");

const TableModel = require("./table");

const sq = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "mysql",
  }
);

TableModel.init(sq);

module.exports = sq;

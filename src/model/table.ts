const Sequelize = require("sequelize");

class Table extends Sequelize.Model {
  static init(sequelize: any) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        report: {
          type: Sequelize.INTEGER,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Table",
        tableName: "Table",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}
module.exports = Table;

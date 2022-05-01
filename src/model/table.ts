const { Model, DataTypes } = require("sequelize");

class Table extends Model {
  static init(sequelize: any) {
    return super.init(
      {
        author: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        report: {
          type: DataTypes.INTEGER,
          default: 0,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Table",
        tableName: "Table",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}
module.exports = Table;

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Measurements extends Model {}

Measurements.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fat_percentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    body_mass: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "measurements",
  }
);

module.exports = Measurements;

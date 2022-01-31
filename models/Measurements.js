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
    Height: {
      type: DataTypes.INTEGER,
      allowNull: True,
    },
    Weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      },
    Fat_Percentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Body_Mass: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
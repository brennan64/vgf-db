const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Food extends Model {}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 35],
        isAlpha: true,
      },
    },
    dish_game: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlphanumeric: true,
      // },
    },
    dish_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
      references: {
        model: "category",
        key: "category_name",
      },

      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "food",
  }
);

module.exports = Food;

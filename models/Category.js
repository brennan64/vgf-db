const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const Login = require('./Login');


class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 20],
        isAlpha: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;


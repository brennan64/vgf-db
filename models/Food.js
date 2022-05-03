const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
const Login = require("./Login");

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
      unique: true,
      validate: {
        len: [3, 35],
        isAlpha: true,
      },
    },
    dish_game: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    dish_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        isAlpha: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
      onDelete: "CASCADE",
    },
=======
          isAlpha: true,
          references: {
            model: 'category',
            key: 'id',
          },
          onDelete: 'CASCADE'
      },
    },
>>>>>>> 02baca369650c5503be15d36ed7d03778a786876
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

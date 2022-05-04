const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connections');

class Login extends Model { 
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.hashedPassword);
  }
}

Login.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 15],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 15],
      },
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.hashedPassword = await bcrypt.hash(newUserData.hashedPassword, 25);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.hashedPassword = await bcrypt.hash(updatedUserData.hashedPassword, 25);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'login',
  }
);

module.exports = Login;

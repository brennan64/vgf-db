const User = require("./User");
const Food = require("./Food");
const Category = require("./Category");

Category.hasMany(Food, {
  foreignKey: "category_id",
});

Food.belongsTo(Category, {
  foreignKey: "category_id",
});

module.exports = { User, Food, Category };

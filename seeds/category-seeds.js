const { Category } = require("../models");

const categoryData = [
  {
    dish_category: "Solid",
  },
  {
    dish_category: "Savory",
  },
  {
    dish_category: "Drink",
  },
  {
    dish_category: "Milk",
  },
  {
    dish_category: "Soup",
  },
  {
    dish_category: "Tea",
  },
  {
    dish_category: "Sweet",
  },
  {
    dish_category: "Sour",
  },
  {
    dish_category: "Spicy",
  },
  {
    dish_category: "Lie",
  },
  {
    dish_category: "Wine",
  },
  {
    dish_category: "Beer",
  },
  {
    dish_category: "Liquor",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

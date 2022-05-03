const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Solid",
  },
  // {
  //   category_name: "Savory",
  // },
  // {
  //   category_name: "Drink",
  // },
  // {
  //   category_name: "Milk",
  // },
  // {
  //   category_name: "Soup",
  // },
  // {
  //   category_name: "Tea",
  // },
  // {
  //   category_name: "Sweet",
  // },
  // {
  //   category_name: "Sour",
  // },
  // {
  //   category_name: "Spicy",
  // },
  // {
  //   category_name: "Lie",
  // },
  // {
  //   category_name: "Wine",
  // },
  // {
  //   category_name: "Beer",
  // },
  // {
  //   category_name: "Liquor",
  // },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

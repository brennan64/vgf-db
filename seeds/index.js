const seedCategories = require("./category-seeds.js");
const foodSeed = require("./Food-Seeds");

const sequelize = require("../config/connections");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await foodSeed();
  console.log("\n----- FOODS SEEDED -----\n");

  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  process.exit(0);
};

seedAll();

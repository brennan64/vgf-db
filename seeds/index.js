const seedCategories = require('./category-seeds.js');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await vgfSeed();
  console.log('\n----- VGF SEEDED -----\n');

  process.exit(0);
};

seedAll();

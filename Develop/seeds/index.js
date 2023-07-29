const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  async sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  async seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  async seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  async seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  async seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();

const seedUsers = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPost();
  console.log('\n----- POST SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENT SEEDED -----\n');

  process.exit(0);
};

seedAll();

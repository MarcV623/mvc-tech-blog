const { User } = require('../models');

const data = [
  {
    username: 'clark123', 
    password: 'password'
  },
  {
    username: 'mike456',
    password: 'password'
  }
];

const seeds = () => User.bulkCreate(data);

module.exports = seeds;

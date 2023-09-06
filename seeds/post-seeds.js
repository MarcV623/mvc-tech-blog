const { Post } = require('../models');

const data = [
  {
    title: 'greetings',
    content: 'how are you doing.',
    userId: 1
  },
  {
    title: 'hayday',
    content: 'so your still going',
    userId: 2
  }
];

const seeds = () => Post.bulkCreate(data);

module.exports = seeds;

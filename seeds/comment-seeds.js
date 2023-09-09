const { Comment } = require('../models');

const data = [
  {
    content: 'yes I am.',
    postId: 1,
    userId: 1
  },
  {
    content: 'yes I am!',
    postId: 1,
    userId: 1
  },
  {
    content: 'no I\'m not!',
    postId: 2,
    userId: 2
  }
];

const seeds = () => Comment.bulkCreate(data);

module.exports = seeds;

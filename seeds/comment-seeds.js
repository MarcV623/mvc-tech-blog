const { Comment } = require('../models');

const data = [
  {
    content: 'yes I am.',
    postId: 1,
    userId: 1
  }
];

const seeds = () => Comment.bulkCreate(data);

module.exports = seeds;

const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// POST /api/users
router.post('/', async (req, res) => {
  res.status(200).json({});
});

// POST /api/users/authorization
router.post('/authorization', async (req, res) => {
  res.status(200).json({});
});

// DELETE /api/users/authorization
router.delete('/authorization', async (req, res) => {
  res.status(200).json({});
});

module.exports = router;
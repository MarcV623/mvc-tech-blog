const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET /api/posts
router.get('/', async (req, res) => {
  let posts = await Post.findAll()
  res.status(200).json(posts);
});

// GET /api/posts/:id
router.get('/:id', async (req, res) => {
  const id = req.params.id

  let results = await Post.findAll({
    where: {
      id: id
    }
  })

  if (results.length === 0) {
    res.status(404).json({ error: 'Invalid Id Provided' })
  } else {
    let post = results[0]
    res.status(200).json(post);
  }
});

// PUT /api/posts/:id
router.put('/:id', async (req, res) => {
  res.status(200).json({});
});

// DELETE /api/posts/:id
router.delete('/:id', async (req, res) => {
  res.status(200).json({});
});

// GET /api/posts/:id/comments
router.get('/:id/comments', async (req, res) => {
  res.status(200).json({});
});

// POST /api/posts/:id/comments
router.post('/:id/comments', async (req, res) => {
  res.status(200).json({});
});

module.exports = router;

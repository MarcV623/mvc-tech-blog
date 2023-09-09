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

// GET /api/posts/:id/comments
router.get('/:id/comments', async (req, res) => {
  const id = req.params.id

  const results = await Comment.findAll({
    where: {
      postId: id
    }
  })

  res.status(200).json(results);
});

// PUT /api/posts/:id
router.put('/:id', async (req, res) => {
  const id = req.params.id

  const results = await Post.update(req.body, {
    where: {
      id: id,
    }
  })

  if (results[0] > 0) {
    res.status(200).end();
  } else {
    res.status(404).end();
  }
});

// DELETE /api/posts/:id
router.delete('/:id', async (req, res) => {
  const id = req.params.id

  let results = await Comment.destroy({
    where: {
      postId: id,
    }
  })

  results = await Post.destroy({
    where: {
      id: id
    }
  })

  res.status(200).end();
});

// POST /api/posts/:id/comments
router.post('/:id/comments', async (req, res) => {
  res.status(200).json({});
});

module.exports = router;

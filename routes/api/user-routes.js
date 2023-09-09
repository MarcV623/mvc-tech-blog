const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// POST /api/users
router.post('/', async (req, res) => {
  const results = await User.create(req.body)
  res.status(200).json(results);
});

// POST /api/users/authorization
router.post('/authorization', async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username
    }
  });

  if (user === null) {
    res.status(400).end();
  } else {
    const passwordMatch = await user.checkPassword(req.body.password);

    if (!passwordMatch) {
      res.status(400).end();
    } else {
      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
        res.status(200).json(user);
      });
    }
  }
});

// DELETE /api/users/authorization
router.delete('/authorization', async (req, res) => {
  res.status(200).json({});
});

module.exports = router;

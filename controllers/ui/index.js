const router = require('express').Router();
const { User } = require('../../models');

const axios = require('axios')

const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  const response = await axios.get(`http://localhost:${process.env.PORT || 3001}/api/posts`)

  const posts = response.data

  res.render('homepage', {
    logged_in: req.session.logged_in,
    posts: posts
  });
});

router.get('/posts/:id', withAuth, async (req, res) => {
  let response = await axios.get(`http://localhost:${process.env.PORT || 3001}/api/posts/${req.params.id}`)

  const post = response.data

  response = await axios.get(`http://localhost:${process.env.PORT || 3001}/api/posts/${req.params.id}/comments`)

  const comments = response.data

  res.render('post', {
    logged_in: req.session.logged_in,
    post: post,
    comments: comments
  });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/ui');
    return;
  }

  res.render('login');
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  res.render('dashboard', {
    logged_in: true
  });
});

module.exports = router;

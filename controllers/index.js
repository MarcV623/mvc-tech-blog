const router = require('express').Router();

const apiRoutes = require('./api');
const uiRoutes = require('./ui')

router.use('/api', apiRoutes);

router.use('/ui', uiRoutes)

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
const express = require('express');
const session = require('express-session');

const routes = require('./routes');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sessionOptions = {
  secret: 'fsociety',
  cookie: {},
  resave: false,
  saveUninitialized: true
}

app.use(session(sessionOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

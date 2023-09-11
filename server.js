const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const path = require('path');

const controllers = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sessionOptions = {
  secret: 'fsociety',
  cookie: {},
  resave: false,
  saveUninitialized: true
}

// Create the Handlebars.js engine object with custom helper functions
const hbs = handlebars.create({});

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sessionOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

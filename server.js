const express = require("express");
const sequelize = require("./config/connection");
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controller')
const sess = {
  secret: "secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware 
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes
app.use(routes)

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

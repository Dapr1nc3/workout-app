const express = require('express');
const sequelize = require('./config/connection');
// const passport = require('passport');


const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   // to not resave session variables if nothing has changed 
//   resave: false,
//   // to not save empty value in session
//   saveUninitialized: false
// }))
// app.use(passport.init())
// app.use(passport.session())

// routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

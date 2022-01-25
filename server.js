const express = require("express");
const sequelize = require("./config/connection");

const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes
app.use('/', htmlRoutes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
<<<<<<< HEAD
});
=======
});
>>>>>>> 9f7a73cf3d8e318e9d3a720efb27fd79d545ee60

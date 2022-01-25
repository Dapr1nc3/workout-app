const Sequelize = require("sequelize");
require("dotenv").config();

// create connection to our database, pass in your MySQL information for username and password ('git_fit_db', 'username', 'PW', {...
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
<<<<<<< HEAD
    // original: host: 'localhost'
    host: "localhost",
=======
    // original: host: 'localhost. if you have any issues with localhost, use "127.0.0.1'
    host: "127.0.0.1",
>>>>>>> 9f7a73cf3d8e318e9d3a720efb27fd79d545ee60
    dialect: "mysql",
    port: 3306,
  }
);

<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize;
>>>>>>> 9f7a73cf3d8e318e9d3a720efb27fd79d545ee60

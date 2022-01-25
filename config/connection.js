const Sequelize = require("sequelize");
require("dotenv").config();

// create connection to our database, pass in your MySQL information for username and password ('git_fit_db', 'username', 'PW', {...
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    // original: host: 'localhost. if you have any issues with localhost, use "127.0.0.1'
    host: "",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;

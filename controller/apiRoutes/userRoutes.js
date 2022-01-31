const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");
const { body } = require("express-validator");

// GET /api/users
router.get("/", (req, res) => {
  // Access our User model and run .findAll() method
  User.findAll({
    // used Attribute key and instructed the query to exclude the password column.
    // It's in an array because if we want to exclude more than one, we can just add more.
    // attributes: { exclude: ['password'] }
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users
router.get("/:id", (req, res) => {
  // Access our User model and run .findOne) method
  User.findOne({
    // used Attribute key and instructed the query to exclude the password column.
    // It's in an array because if we want to exclude more than one, we can just add more.
    // attributes: { exclude: ['password'] }
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users - Create a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login a user
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then(async (userData) => {
    if (!userData) {
      res.status(400).json({ message: "no user found" });
      return;
    }
    const passwordValidation = body("password").custom((value) => {
      if(value !== userData.password) {
        return false;
      }
      return true;
    })
    
    if (!passwordValidation) {
      res.status(400).json({ message: "incorrect password"});
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
    })
    res.json({ message: "Successfully logged in", user: userData});
  });
});

module.exports = router;

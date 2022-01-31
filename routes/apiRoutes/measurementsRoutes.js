const router = require("express").Router();
const { Measurements } = require("../../models");

// GET /api/users
router.get("/", (req, res) => {
  // Access our Measurement model and run .findAll() method
  User.findAll({
    // used Attribute key and instructed the query to exclude the password column.
    // It's in an array because if we want to exclude more than one, we can just add more.
    // Ex: attributes: { exclude: ['password'] }
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users
router.get("/:id", (req, res) => {
  // Access our measurement model and run .findOne) method
  User.findOne({
    // used Attribute key and instructed the query to exclude the password column.
    // It's in an array because if we want to exclude more than one, we can just add more.
    // Ex: attributes: { exclude: ['password'] }
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No measurements found with this id" });
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
router.post('/', (req, res) => {
 User.create({
   username: req.body.username,
   email: req.body.email,
   password: req.body.password
 })
   .then(dbUserData => res.json(dbUserData))
   .catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
});

module.exports = router;
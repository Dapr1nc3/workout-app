const router = require("express").Router();
const { Measurements, User } = require("../../models");

// GET /api/users/measurements/
router.get("/", (req, res) => {
  // Access our Measurement model and run .findAll() method
  Measurements.findAll({
    // used Attribute key and instructed the query to exclude the password column.
    // It's in an array because if we want to exclude more than one, we can just add more.
    // Ex: attributes: { exclude: ['password'] }
   // Query configuration
  //  attributes: ["id", "height", "weight", "body_mass", "fat_percentage"], 
  //  include: [
  //    {
  //      model: User,
  //      attributes: ["username"],
  //    },
  //  ],
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
  Measurements.findOne({
    // used Attribute key and instructed the query to exclude the password column.
    // It's in an array because if we want to exclude more than one, we can just add more.
    // Ex: attributes: { exclude: ['password'] }
    where: {
      id: req.params.id,
    },
    // Query configuration
   attributes: ["id", "height", "weight", "body_mass", "fat_percentage"], 
   include: [
     {
       model: User,
       attributes: ["username"],
     },
   ],
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

// POST /api/users/measurements - Create measurements for user
router.post('/', (req, res) => {
 Measurements.create({
   height: req.body.height,
   weight: req.body.weight,
   fat_percentage: req.body.fat_percentage,
   body_mass: req.body.body_mass,
   user_id: req.body.user_id 
 })
   .then(dbUserData => res.json(dbUserData))
   .catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
});

module.exports = router;
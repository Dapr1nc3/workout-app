const router = require("express").Router();
const authorization = require("../../loggedIn/auth");
const path = require("path");

// route for landing page
router.get("/", (req, res) => {
  res.render("page1");
});

// route for page 2
router.get("/page2", authorization, (req, res) => {
  res.render("page2");
});

// route for page 3
router.get("/page3", authorization, (req, res) => {
  res.render("page3");
});

// route for page 4
router.get("/signup", (req, res) => {
  res.render("page4");
});

// route for login page
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;

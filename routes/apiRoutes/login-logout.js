const router = require("express").Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require ('express-session');
const initPassport = require('../../config/passport');

initPassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id ===id)
)

app.post('/login', passport.authenticate('local', {
    successRedirect: '../.././public/page1.html',
    failureRedirect: '../.././public/page2.html',
    failureFlash: true
}))

module.exports = router;
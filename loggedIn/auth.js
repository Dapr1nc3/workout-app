const withAuth = async (req, res, next) => {
  await (req.session.user_id);
  console.log(req.session);
  if (!req.session.user_id) {
    res.redirect("/signup");
  } else {
    next();
  }
};

module.exports = withAuth;

const withAuth = (req, res, next) => {
    if(!req.session.user_id){
        res.redirect("/page1")
    } else {
        next()
    }
};

module.exports = withAuth
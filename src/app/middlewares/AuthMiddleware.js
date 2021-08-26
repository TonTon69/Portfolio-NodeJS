const User = require("../models/User");

module.exports.requireAuth = function (req, res, next) {
    if (!req.signedCookies.userId) {
        res.redirect("/auth/login");
        return;
    }
    User.findOne({ _id: req.signedCookies.userId }).then((user) => {
        if (!user) {
            res.redirect("/auth/login");
            return;
        }
        res.locals.user = user;
        next();
    });
};

module.exports.checkAdmin = function (req, res, next) {
    const { role } = res.locals.user;
    if (role) {
        next();
    } else {
        req.flash("error", "You do not have permission to access this page!");
        res.redirect("/error");
    }
};

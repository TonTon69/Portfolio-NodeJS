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

module.exports.authValidate = function (req, res, next) {
    const { email, password } = req.body;
    if (!email && !password) {
        req.flash(
            "error",
            "Please enter the information below to login your account!"
        );
        res.render("auth/login", {
            errors: req.flash("error"),
        });
        return;
    }
    if (!email) {
        req.flash("error", "Please enter your email!");
        res.render("auth/login", {
            errors: req.flash("error"),
            values: req.body,
        });
        return;
    }
    if (!password) {
        req.flash("error", "Please enter your password!");
        res.render("auth/login", {
            errors: req.flash("error"),
            values: req.body,
        });
        return;
    }
    next();
};

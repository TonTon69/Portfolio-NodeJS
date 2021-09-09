const User = require("../models/User");
const Token = require("../models/Token");

module.exports = {
    requireAuth: function (req, res, next) {
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
    },
    checkAdmin: function (req, res, next) {
        const { role } = res.locals.user;
        if (role) {
            next();
        } else {
            req.flash(
                "error",
                "You do not have permission to access this page!"
            );
            res.redirect("/error");
        }
    },
    authValidate: function (req, res, next) {
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
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(regexEmail)) {
            req.flash("error", "Please enter a valid email address!");
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
        if (password.length < 6) {
            req.flash("error", "Your password must be at least 6 characters!");
            res.render("auth/login", {
                errors: req.flash("error"),
                values: req.body,
            });
            return;
        }
        next();
    },
    resetPasswordValidate: function (req, res, next) {
        const { token } = req.params;
        const { password, passwordConfirm } = req.body;
        if (!password && !passwordConfirm) {
            req.flash(
                "error",
                "Please enter the information below to reset password your account!"
            );
            res.render("auth/reset-confirm", {
                token,
                errors: req.flash("error"),
            });
            return;
        }
        if (!password) {
            req.flash("error", "Please create new password your account!");
            res.render("auth/reset-confirm", {
                token,
                errors: req.flash("error"),
                values: req.body,
            });
            return;
        }
        if (password.length < 6) {
            req.flash(
                "error",
                "Your new password must be at least 6 characters!"
            );
            res.render("auth/reset-confirm", {
                token,
                errors: req.flash("error"),
                values: req.body,
            });
            return;
        }
        if (!passwordConfirm) {
            req.flash("error", "Please confirm new password your account!");
            res.render("auth/reset-confirm", {
                token,
                errors: req.flash("error"),
                values: req.body,
            });
            return;
        }
        if (passwordConfirm !== password) {
            req.flash("error", "Confirm new password does not match!");
            res.render("auth/reset-confirm", {
                token,
                errors: req.flash("error"),
                values: req.body,
            });
            return;
        }

        next();
    },
};

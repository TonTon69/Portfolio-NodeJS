const User = require("../models/User");
const bcrypt = require("bcrypt");

class AuthController {
    // [GET]/auth/login
    login(req, res, next) {
        res.render("auth/login", { errors: req.flash("error") });
    }

    // [POST]/auth/login
    async postLogin(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            req.flash("error", "Your email does not exist!");
            res.render("auth/login", {
                values: req.body,
                errors: req.flash("error"),
            });
            return;
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            req.flash("error", "Your password does not match!");
            res.render("auth/login", {
                values: req.body,
                errors: req.flash("error"),
            });
            retrun;
        }

        const isVerified = user.verified;
        if (!isVerified) {
            req.flash("error", "Your account is not verified!");
            res.render("auth/login", {
                errors: req.flash("error"),
            });
            retrun;
        }

        res.cookie("userId", user.id, {
            signed: true,
        });
        res.redirect("/");
    }
}

module.exports = new AuthController();

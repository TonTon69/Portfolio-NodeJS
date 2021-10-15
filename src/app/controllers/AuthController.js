const User = require("../models/User");
const Token = require("../models/Token");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { sendEmail } = require("../../utils/send-email");

class AuthController {
    // [GET]/auth/login
    login(req, res, next) {
        res.render("auth/login", {
            errors: req.flash("error"),
            success: req.flash("success"),
        });
    }

    // [POST]/auth/login
    async postLogin(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            req.flash("error", "User with this email does not exist!");
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
            return;
        }

        const isVerified = user.verified;
        if (!isVerified) {
            req.flash("error", "Your account is not verified!");
            res.render("auth/login", {
                errors: req.flash("error"),
            });
            return;
        }

        res.cookie("userId", user.id, {
            signed: true,
        });
        res.redirect("/");
    }

    // [GET]/auth/logout
    logout(req, res) {
        res.clearCookie("userId");
        res.clearCookie("sessionId");
        res.redirect("/");
    }

    // [GET]/auth/password/reset
    passwordReset(req, res, next) {
        res.render("auth/password-reset", {
            errors: req.flash("error"),
            success: req.flash("success"),
        });
    }

    // [POST]/auth/password/reset
    async postPasswordReset(req, res, next) {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            req.flash("error", "User with this email does not exist!");
            res.render("auth/password-reset", {
                values: req.body,
                errors: req.flash("error"),
                success: req.flash("success"),
            });
            return;
        }

        const token = crypto.randomBytes(32).toString("hex");
        Token.updateOne(
            { userId: user._id },
            { userId: user._id, token: token },
            { upsert: true }
        )
            .then(() => {
                const resetLink = `${process.env.BASE_URL}/auth/reset/confirm/${token}`;
                sendEmail({
                    to: user.email,
                    subject: "Password Reset",
                    text: `Hi ${user.name}, here's your password reset link: ${resetLink}. If you did not request this link, ignore it.`,
                });
                req.flash(
                    "success",
                    "Check your email address for the password reset link!"
                );
                res.render("auth/password-reset", {
                    errors: req.flash("error"),
                    success: req.flash("success"),
                });
            })
            .catch((error) => {
                req.flash(
                    "error",
                    "Failed to generate reset link, please try again!"
                );
                res.render("auth/password-reset", {
                    values: req.body,
                    errors: req.flash("error"),
                    success: req.flash("success"),
                });
            });
    }

    // [GET]/auth/reset/confirm/:token
    async resetConfirm(req, res, next) {
        const token = req.params.token;
        const passwordReset = await Token.findOne({ token: token });
        if (passwordReset !== null) {
            res.render("auth/reset-confirm", {
                token: token,
                // valid: passwordReset ? true : false,
                errors: req.flash("error"),
                success: req.flash("success"),
            });
        } else {
            res.status(404).render("error");
        }
    }

    // [POST]/auth/reset/confirm/:token
    async postResetConfirm(req, res, next) {
        const token = req.params.token;
        const passwordReset = await Token.findOne({ token });

        let user = await User.findOne({ _id: passwordReset.userId });
        user.password = await bcrypt.hash(req.body.password, 10);
        user.save()
            .then(async (savedUser) => {
                await Token.deleteOne({ _id: passwordReset._id });
                sendEmail({
                    to: user.email,
                    subject: "Password Reset Successful",
                    text: `Congratulations ${user.name}! Your password reset was successful.`,
                });
                req.flash("success", "Password reset successful!");
                res.redirect("/auth/login");
            })
            .catch((error) => {
                req.flash("error", "Failed to reset password please try again");
                return res.redirect(`/auth/reset/confirm/${token}`);
            });
    }
}

module.exports = new AuthController();

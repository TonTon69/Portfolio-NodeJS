const User = require("../models/User");

module.exports = async function AuthMiddleware(req, res, next) {
    if (!req.signedCookies.userId) {
        res.redirect("/auth/login");
        return;
    }
    const user = await User.findById(req.signedCookies.userId);
    if (!user) {
        res.redirect("/auth/login");
        return;
    }
    res.locals.user = user;
    next();
};

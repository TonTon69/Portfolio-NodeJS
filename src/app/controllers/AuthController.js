const User = require("../models/User");

class AuthController {
    // [GET]/
    login(req, res, next) {
        res.render("auth/login");
    }
}

module.exports = new AuthController();

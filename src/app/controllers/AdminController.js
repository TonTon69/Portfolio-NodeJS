const Project = require("../models/Project");

class AdminController {
    // [GET]/
    index(req, res, next) {
        res.render("admin/index");
    }
}

module.exports = new AdminController();

const Project = require("../models/Project");
const Contact = require("../models/Contact");

class SiteController {
    // [GET]/
    index(req, res, next) {
        Project.find({})
            .then((projects) => {
                res.render("index", {
                    projects,
                });
            })
            .catch(next);
    }

    // [GET]/about
    about(req, res) {
        res.render("about");
    }
}

module.exports = new SiteController();

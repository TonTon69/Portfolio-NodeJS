const Project = require("../models/Project");
const Contact = require("../models/Contact");

class SiteController {
    // [GET]/
    index(req, res, next) {
        Promise.all([Project.find({}), Contact.find({})])
            .then(([projects, contacts]) => {
                res.render("index", {
                    projects,
                    contacts,
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

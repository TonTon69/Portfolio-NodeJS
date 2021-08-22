const Project = require("../models/Project");
const Contact = require("../models/Contact");
const Award = require("../models/Award");

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
    about(req, res, next) {
        Promise.all([Award.find({}).sort({ year: -1 }), Contact.find({})])
            .then(([awards, contacts]) => {
                res.render("about", {
                    awards,
                    contacts,
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();

const Project = require("../models/Project");
const Contact = require("../models/Contact");
const Award = require("../models/Award");
const Education = require("../models/Education");

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
        Promise.all([
            Award.find({}).sort({ year: -1 }),
            Contact.find({}),
            Education.find({}).sort({ startYear: -1, endYear: -1 }),
        ])
            .then(([awards, contacts, educations]) => {
                res.render("about", {
                    awards,
                    contacts,
                    educations,
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();

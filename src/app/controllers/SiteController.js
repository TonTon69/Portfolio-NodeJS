const Project = require("../models/Project");
const Contact = require("../models/Contact");
const Award = require("../models/Award");
const Education = require("../models/Education");
const Experience = require("../models/Experience");

class SiteController {
    // [GET]/
    index(req, res, next) {
        Promise.all([
            Project.find({}).sort({ location: 1 }).limit(6),
            Contact.find({}),
        ])
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
            Experience.find({}).sort({ startYear: -1, endYear: -1 }),
        ])
            .then(([awards, contacts, educations, experiences]) => {
                res.render("about", {
                    awards,
                    contacts,
                    educations,
                    experiences,
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();

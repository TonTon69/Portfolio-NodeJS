const Project = require("../models/Project");
const Contact = require("../models/Contact");
const Award = require("../models/Award");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Expertise = require("../models/Expertise");
const ExpertiseCategory = require("../models/ExpertiseCategory");
const User = require("../models/User");

class SiteController {
    // [GET]/
    index(req, res, next) {
        Promise.all([
            Project.find({}).sort({ location: 1 }).limit(6),
            User.findOne({ _id: req.signedCookies.userId }),
        ])
            .then(([projects, user]) => {
                if (user) {
                    res.locals.user = user;
                    res.render("index", {
                        projects,
                    });
                } else {
                    res.render("index", {
                        projects,
                    });
                }
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
            ExpertiseCategory.find({}).sort({ location: 1 }),
            Expertise.find({}).sort({ location: 1 }),
            User.findOne({ _id: req.signedCookies.userId }),
        ])
            .then(
                ([
                    awards,
                    contacts,
                    educations,
                    experiences,
                    expertiseCategories,
                    expertises,
                    user,
                ]) => {
                    if (user) {
                        res.locals.user = user;
                        res.render("about", {
                            awards,
                            contacts,
                            educations,
                            experiences,
                            expertiseCategories,
                            expertises,
                        });
                    } else {
                        res.render("about", {
                            awards,
                            contacts,
                            educations,
                            experiences,
                            expertiseCategories,
                            expertises,
                        });
                    }
                }
            )
            .catch(next);
    }
}

module.exports = new SiteController();

const Project = require("../models/Project");
const Contact = require("../models/Contact");
const Award = require("../models/Award");
const Education = require("../models/Education");
const Experience = require("../models/Experience");

class MeController {
    // [GET]/me/strored/projects
    storedProjects(req, res, next) {
        let projectQuery = Project.find({});
        if (req.query.hasOwnProperty("_sort")) {
            projectQuery = projectQuery.sort({
                [req.params.column]: req.query.type,
            });
        }

        Promise.all([projectQuery, Project.countDocumentsDeleted()])
            .then(([projects, deletedCount]) => {
                res.render("me/stored-projects", {
                    projects,
                    deletedCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/trash/projects
    trashProjects(req, res, next) {
        Promise.all([Project.findDeleted({}), Project.countDocuments()])
            .then(([projects, storedProjectsCount]) => {
                res.render("me/trash-projects", {
                    projects,
                    storedProjectsCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/strored/contacts
    storedContacts(req, res, next) {
        Promise.all([Contact.find({}), Contact.countDocumentsDeleted()])
            .then(([contacts, deletedCount]) => {
                res.render("me/stored-contacts", {
                    contacts,
                    deletedCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/trash/contacts
    trashContacts(req, res, next) {
        Promise.all([Contact.findDeleted({}), Contact.countDocuments()])
            .then(([contacts, storedContactsCount]) => {
                res.render("me/trash-contacts", {
                    contacts,
                    storedContactsCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/strored/awards
    storedAwards(req, res, next) {
        Promise.all([Award.find({}), Award.countDocumentsDeleted()])
            .then(([awards, deletedCount]) => {
                res.render("me/stored-awards", {
                    awards,
                    deletedCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/trash/awards
    trashAwards(req, res, next) {
        Promise.all([Award.findDeleted({}), Award.countDocuments()])
            .then(([awards, storedAwardsCount]) => {
                res.render("me/trash-awards", {
                    awards,
                    storedAwardsCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/strored/educations
    storedEducations(req, res, next) {
        Promise.all([Education.find({}), Education.countDocumentsDeleted()])
            .then(([educations, deletedCount]) => {
                res.render("me/stored-educations", {
                    educations,
                    deletedCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/trash/educations
    trashEducations(req, res, next) {
        Promise.all([Education.findDeleted({}), Education.countDocuments()])
            .then(([educations, storedEducationsCount]) => {
                res.render("me/trash-educations", {
                    educations,
                    storedEducationsCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/strored/experiences
    storedExperiences(req, res, next) {
        Promise.all([Experience.find({}), Experience.countDocumentsDeleted()])
            .then(([experiences, deletedCount]) => {
                res.render("me/stored-experiences", {
                    experiences,
                    deletedCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/trash/experiences
    trashExperiences(req, res, next) {
        Promise.all([Experience.findDeleted({}), Experience.countDocuments()])
            .then(([experiences, storedExperiencesCount]) => {
                res.render("me/trash-experiences", {
                    experiences,
                    storedExperiencesCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();

const Project = require("../models/Project");
const Contact = require("../models/Contact");
const Award = require("../models/Award");

class MeController {
    // [GET]/me/strored/projects
    storedProjects(req, res, next) {
        Promise.all([Project.find({}), Project.countDocumentsDeleted()])
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
}

module.exports = new MeController();

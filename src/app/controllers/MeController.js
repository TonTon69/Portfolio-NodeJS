const Project = require("../models/Project");
const Contact = require("../models/Contact");
const Award = require("../models/Award");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Expertise = require("../models/Expertise");
const ExpertiseCategory = require("../models/ExpertiseCategory");
const SystemInfo = require("../models/SystemInfo");

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

    // [GET]/me/strored/expertises
    storedExpertises(req, res, next) {
        let perPage = 6; // số lượng expertises xuất hiện trên 1 page
        let page = req.params.page || 1;
        Promise.all([
            Expertise.find({})
                .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
                .limit(perPage),
            Expertise.countDocuments(), // đếm để tính có bao nhiêu trang
            Expertise.countDocumentsDeleted(),
            ExpertiseCategory.find({}),
        ])
            .then(
                ([
                    expertises,
                    storedExpertisesCount,
                    deletedCount,
                    expertisesCategories,
                ]) => {
                    res.render("me/stored-expertises", {
                        expertises, // expertises trên một page
                        current: page, // page hiện tại
                        pages: Math.ceil(storedExpertisesCount / perPage), // tổng số các page
                        deletedCount,
                        expertisesCategories,
                        success: req.flash("success"),
                    });
                }
            )
            .catch(next);
    }

    // [GET]/me/trash/expertises
    trashExpertises(req, res, next) {
        Promise.all([
            Expertise.findDeleted({}),
            Expertise.countDocuments(),
            ExpertiseCategory.find({}),
        ])
            .then(
                ([expertises, storedExpertisesCount, expertisesCategories]) => {
                    res.render("me/trash-expertises", {
                        expertises,
                        storedExpertisesCount,
                        expertisesCategories,
                        success: req.flash("success"),
                    });
                }
            )
            .catch(next);
    }

    // [GET]/me/strored/expertises/categories
    storedExpertisesCategories(req, res, next) {
        Promise.all([
            ExpertiseCategory.find({}),
            ExpertiseCategory.countDocumentsDeleted(),
        ])
            .then(([expertiseCategories, deletedCount]) => {
                res.render("me/stored-expertises-categories", {
                    expertiseCategories,
                    deletedCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/trash/expertises/categories
    trashExpertisesCategories(req, res, next) {
        Promise.all([
            ExpertiseCategory.findDeleted({}),
            ExpertiseCategory.countDocuments(),
        ])
            .then(([expertiseCategories, storedExpertisesCategoriesCount]) => {
                res.render("me/trash-expertises-categories", {
                    expertiseCategories,
                    storedExpertisesCategoriesCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/strored/system/info
    storedSystemInfo(req, res, next) {
        Promise.all([SystemInfo.find({}), SystemInfo.countDocumentsDeleted()])
            .then(([systemInfo, deletedCount]) => {
                res.render("me/stored-system-info", {
                    systemInfo,
                    deletedCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/trash/system/info
    trashSystemInfo(req, res, next) {
        Promise.all([SystemInfo.findDeleted({}), SystemInfo.countDocuments()])
            .then(([systemInfo, storedSystemInfoCount]) => {
                res.render("me/trash-system-info", {
                    systemInfo,
                    storedSystemInfoCount,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();

const Project = require("../models/Project");

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
}

module.exports = new MeController();

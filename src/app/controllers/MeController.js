const Project = require("../models/Project");

class MeController {
    // [GET]/me/strored/projects
    storedProjects(req, res, next) {
        Project.find({})
            .then((projects) => {
                res.render("me/stored-projects", {
                    projects,
                    success: req.flash("success"),
                });
            })
            .catch(next);
    }

    // [GET]/me/trash/projects
    trashProjects(req, res, next) {
        Project.findDeleted({})
            .then((projects) => {
                res.render("me/trash-projects", {
                    projects,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();

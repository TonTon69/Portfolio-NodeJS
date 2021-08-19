const Project = require("../models/Project");

class MeController {
    // [GET]/me/strored/projects
    storedProjects(req, res, next) {
        Project.find({})
            .then((projects) => {
                res.render("me/stored-projects", {
                    projects,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();

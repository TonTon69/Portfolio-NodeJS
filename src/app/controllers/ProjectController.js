const Project = require("../models/Project");

class ProjectController {
    // [GET]/projects/create
    create(req, res) {
        res.render("projects/create");
    }

    // [POST]/projects/store
    postCreate(req, res, next) {
        const project = new Project(req.body);
        project
            .save()
            .then(() => res.redirect("/"))
            .catch(next);
    }
}

module.exports = new ProjectController();

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
            .then(() => res.redirect("/me/stored/projects"))
            .catch(next);
    }

    // [GET]/projects/:id/edit
    edit(req, res, next) {
        Project.findById(req.params.id)
            .then((project) => res.render("projects/edit", { project }))
            .catch(next);
    }

    // [PUT]/projects/:id
    update(req, res, next) {
        Project.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/projects"))
            .catch(next);
    }
}

module.exports = new ProjectController();

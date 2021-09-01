const Project = require("../models/Project");
const User = require("../models/User");

class ProjectController {
    // [GET]/projects/:slug
    async show(req, res, next) {
        const project = await Project.findOne({ slug: req.params.slug });
        var nextLocation = project.location + 1;
        const nextProject = await Project.findOne({ location: nextLocation });
        const userId = req.signedCookies.userId;
        const user = await User.findById(userId);
        res.render("projects/show", {
            project,
            nextProject,
            user,
        });
        // Promise.all([
        //     Project.findOne({ slug: req.params.slug }),
        //     Project.findOne({ slug: { $gt: req.params.slug } }).sort({
        //         location: 1,
        //     }),
        //     User.findOne({ _id: req.signedCookies.userId }),
        // ])

        //     .then(([project, nextProject, user]) => {
        //         if (user) {
        //             res.locals.user = user;
        //             res.render("projects/show", {
        //                 project,
        //                 nextProject,
        //             });
        //         } else {
        //             res.render("projects/show", {
        //                 project,
        //                 nextProject,
        //             });
        //         }
        //     })
        //     .catch(next);
    }

    // [GET]/projects/create
    create(req, res) {
        res.render("projects/create");
    }

    // [POST]/projects/create
    postCreate(req, res, next) {
        const project = new Project(req.body);
        project
            .save()
            .then(() => {
                req.flash("success", "Create a new project successfully!");
                res.redirect("/me/stored/projects");
            })
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
            .then(() => {
                req.flash("success", "Update this project successfully!");
                res.redirect("/me/stored/projects");
            })
            .catch(next);
    }

    // [DELETE]/projects/:id
    delete(req, res, next) {
        Project.delete({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Successfully saved this project to trash!"
                );
                res.redirect("back");
            })
            .catch(next);
    }

    // [PATCH]/projects/:id/restore
    restore(req, res, next) {
        Project.restore({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Restore this project successfully!");
                res.redirect("/me/stored/projects");
            })
            .catch(next);
    }

    // [DELETE]/projects/:id/force
    forceDelete(req, res, next) {
        Project.deleteOne({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Delete this project successfully!");
                res.redirect("back");
            })
            .catch(next);
    }

    // [POST]/projects/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case "delete":
                Project.delete({ _id: { $in: req.body.projectIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All projects have been successfully saved to the trash!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "restore":
                Project.restore({ _id: { $in: req.body.projectIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All projects have been restored successfully!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "force-delete":
                Project.deleteMany({ _id: { $in: req.body.projectIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All projects have been deleted successfully!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            default:
                res.json(req.body);
        }
    }
}

module.exports = new ProjectController();

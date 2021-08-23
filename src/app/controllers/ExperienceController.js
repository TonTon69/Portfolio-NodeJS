const Experience = require("../models/Experience");

class ExperienceController {
    // [GET]/experiences/create
    create(req, res) {
        res.render("experiences/create");
    }

    // [POST]/experiences/create
    postCreate(req, res, next) {
        const experience = new Experience(req.body);
        experience
            .save()
            .then(() => {
                req.flash("success", "Create a new experience successfully!");
                res.redirect("/me/stored/experiences");
            })
            .catch(next);
    }

    // [GET]/experiences/:id/edit
    edit(req, res, next) {
        Experience.findById(req.params.id)
            .then((experience) =>
                res.render("experiences/edit", { experience })
            )
            .catch(next);
    }

    // [PUT]/experiences/:id
    update(req, res, next) {
        Experience.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                req.flash("success", "Update this experience successfully!");
                res.redirect("/me/stored/experiences");
            })
            .catch(next);
    }

    // [DELETE]/experiences/:id
    delete(req, res, next) {
        Experience.delete({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Successfully saved this experience to trash!"
                );
                res.redirect("back");
            })
            .catch(next);
    }

    // [PATCH]/experiences/:id/restore
    restore(req, res, next) {
        Experience.restore({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Restore this experience successfully!");
                res.redirect("/me/stored/experiences");
            })
            .catch(next);
    }

    // [DELETE]/experiences/:id/force
    forceDelete(req, res, next) {
        Experience.deleteOne({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Delete this experience successfully!");
                res.redirect("back");
            })
            .catch(next);
    }

    // [POST]/experiences/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case "delete":
                Experience.delete({ _id: { $in: req.body.experienceIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All experiences have been successfully saved to the trash!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "restore":
                Experience.restore({ _id: { $in: req.body.experienceIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All experiences have been restored successfully!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "force-delete":
                Experience.deleteMany({ _id: { $in: req.body.experienceIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All experiences have been deleted successfully!"
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

module.exports = new ExperienceController();

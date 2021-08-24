const Expertise = require("../models/Expertise");
const ExpertiseCategory = require("../models/ExpertiseCategory");

class ExpertiseController {
    // [GET]/expertises/create
    create(req, res, next) {
        ExpertiseCategory.find({})
            .then((expertisesCategories) =>
                res.render("expertises/create", {
                    expertisesCategories,
                })
            )
            .catch(next);
    }

    // [POST]/expertises/create
    postCreate(req, res, next) {
        const expertise = new Expertise(req.body);
        expertise
            .save()
            .then(() => {
                req.flash("success", "Create a new expertise successfully!");
                res.redirect("/me/stored/expertises");
            })
            .catch(next);
    }

    // [GET]/expertises/:id/edit
    edit(req, res, next) {
        Promise.all([
            ExpertiseCategory.find({}),
            Expertise.findById(req.params.id),
        ])
            .then(([expertisesCategories, expertise]) =>
                res.render("expertises/edit", {
                    expertisesCategories,
                    expertise,
                })
            )
            .catch(next);
    }

    // [PUT]/expertises/:id
    update(req, res, next) {
        Expertise.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                req.flash("success", "Update this expertise successfully!");
                res.redirect("/me/stored/expertises");
            })
            .catch(next);
    }

    // [DELETE]/expertises/:id
    delete(req, res, next) {
        Expertise.delete({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Successfully saved this expertise to trash!"
                );
                res.redirect("back");
            })
            .catch(next);
    }

    // [PATCH]/expertises/:id/restore
    restore(req, res, next) {
        Expertise.restore({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Restore this expertise successfully!");
                res.redirect("/me/stored/expertises");
            })
            .catch(next);
    }

    // [DELETE]/expertises/:id/force
    forceDelete(req, res, next) {
        Expertise.deleteOne({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Delete this expertise successfully!");
                res.redirect("back");
            })
            .catch(next);
    }

    // [POST]/expertises/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case "delete":
                Expertise.delete({
                    _id: { $in: req.body.expertiseIds },
                })
                    .then(() => {
                        req.flash(
                            "success",
                            "All expertises have been successfully saved to the trash!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "restore":
                Expertise.restore({
                    _id: { $in: req.body.expertiseIds },
                })
                    .then(() => {
                        req.flash(
                            "success",
                            "All expertises have been restored successfully!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "force-delete":
                Expertise.deleteMany({
                    _id: { $in: req.body.expertiseIds },
                })
                    .then(() => {
                        req.flash(
                            "success",
                            "All expertises have been deleted successfully!"
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

module.exports = new ExpertiseController();

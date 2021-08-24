const ExpertiseCategory = require("../models/ExpertiseCategory");

class ExpertiseCategoryController {
    // [GET]/expertises/category/create
    create(req, res) {
        res.render("expertises/category/create");
    }

    // [POST]/expertises/category/create
    postCreate(req, res, next) {
        const expertiseCategory = new ExpertiseCategory(req.body);
        expertiseCategory
            .save()
            .then(() => {
                req.flash(
                    "success",
                    "Create a new expertise category successfully!"
                );
                res.redirect("/me/stored/expertises/categories");
            })
            .catch(next);
    }

    // [GET]/expertises/category/:id/edit
    edit(req, res, next) {
        ExpertiseCategory.findById(req.params.id)
            .then((expertiseCategory) =>
                res.render("expertises/category/edit", { expertiseCategory })
            )
            .catch(next);
    }

    // [PUT]/expertises/category/:id
    update(req, res, next) {
        ExpertiseCategory.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                req.flash(
                    "success",
                    "Update this expertise category successfully!"
                );
                res.redirect("/me/stored/expertises/categories");
            })
            .catch(next);
    }

    // [DELETE]/expertises/category/:id
    delete(req, res, next) {
        ExpertiseCategory.delete({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Successfully saved this expertise category to trash!"
                );
                res.redirect("back");
            })
            .catch(next);
    }

    // [PATCH]/expertises/category/:id/restore
    restore(req, res, next) {
        ExpertiseCategory.restore({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Restore this expertise category successfully!"
                );
                res.redirect("/me/stored/expertises/categories");
            })
            .catch(next);
    }

    // [DELETE]/expertises/category/:id/force
    forceDelete(req, res, next) {
        ExpertiseCategory.deleteOne({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Delete this expertise category successfully!"
                );
                res.redirect("back");
            })
            .catch(next);
    }

    // [POST]/expertises/category/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case "delete":
                ExpertiseCategory.delete({
                    _id: { $in: req.body.expertisesCategoryIds },
                })
                    .then(() => {
                        req.flash(
                            "success",
                            "All expertises category have been successfully saved to the trash!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "restore":
                ExpertiseCategory.restore({
                    _id: { $in: req.body.expertisesCategoryIds },
                })
                    .then(() => {
                        req.flash(
                            "success",
                            "All expertises category have been restored successfully!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "force-delete":
                ExpertiseCategory.deleteMany({
                    _id: { $in: req.body.expertisesCategoryIds },
                })
                    .then(() => {
                        req.flash(
                            "success",
                            "All expertises category have been deleted successfully!"
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

module.exports = new ExpertiseCategoryController();

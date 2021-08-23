const Education = require("../models/Education");

class EducationController {
    // [GET]/educations/create
    create(req, res) {
        res.render("educations/create");
    }

    // [POST]/educations/create
    postCreate(req, res, next) {
        const education = new Education(req.body);
        education
            .save()
            .then(() => {
                req.flash("success", "Create a new education successfully!");
                res.redirect("/me/stored/educations");
            })
            .catch(next);
    }

    // [GET]/educations/:id/edit
    edit(req, res, next) {
        Education.findById(req.params.id)
            .then((education) => res.render("educations/edit", { education }))
            .catch(next);
    }

    // [PUT]/educations/:id
    update(req, res, next) {
        Education.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                req.flash("success", "Update this education successfully!");
                res.redirect("/me/stored/educations");
            })
            .catch(next);
    }

    // [DELETE]/educations/:id
    delete(req, res, next) {
        Education.delete({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Successfully saved this education to trash!"
                );
                res.redirect("back");
            })
            .catch(next);
    }

    // [PATCH]/educations/:id/restore
    restore(req, res, next) {
        Education.restore({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Restore this education successfully!");
                res.redirect("/me/stored/educations");
            })
            .catch(next);
    }

    // [DELETE]/educations/:id/force
    forceDelete(req, res, next) {
        Education.deleteOne({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Delete this education successfully!");
                res.redirect("back");
            })
            .catch(next);
    }

    // [POST]/educations/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case "delete":
                Education.delete({ _id: { $in: req.body.educationIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All educations have been successfully saved to the trash!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "restore":
                Education.restore({ _id: { $in: req.body.educationIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All educations have been restored successfully!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "force-delete":
                Education.deleteMany({ _id: { $in: req.body.educationIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All educations have been deleted successfully!"
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

module.exports = new EducationController();

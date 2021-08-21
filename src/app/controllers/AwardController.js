const Award = require("../models/Award");

class AwardController {
    // [GET]/awards/create
    create(req, res) {
        res.render("awards/create");
    }

    // [POST]/awards/create
    postCreate(req, res, next) {
        const award = new Award(req.body);
        award
            .save()
            .then(() => {
                req.flash("success", "Create a new award successfully!");
                res.redirect("/me/stored/awards");
            })
            .catch(next);
    }

    // [GET]/awards/:id/edit
    edit(req, res, next) {
        Award.findById(req.params.id)
            .then((award) => res.render("awards/edit", { award }))
            .catch(next);
    }

    // [PUT]/awards/:id
    update(req, res, next) {
        Award.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                req.flash("success", "Update this award successfully!");
                res.redirect("/me/stored/awards");
            })
            .catch(next);
    }

    // [DELETE]/awards/:id
    delete(req, res, next) {
        Award.delete({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Successfully saved this award to trash!");
                res.redirect("back");
            })
            .catch(next);
    }

    // [PATCH]/awards/:id/restore
    restore(req, res, next) {
        Award.restore({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Restore this award successfully!");
                res.redirect("/me/stored/awards");
            })
            .catch(next);
    }

    // [DELETE]/awards/:id/force
    forceDelete(req, res, next) {
        Award.deleteOne({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Delete this award successfully!");
                res.redirect("back");
            })
            .catch(next);
    }
}

module.exports = new AwardController();

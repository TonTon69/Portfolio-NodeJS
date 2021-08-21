const Contact = require("../models/Contact");

class ContactController {
    // [GET]/contacts/create
    create(req, res) {
        res.render("contacts/create");
    }

    // [POST]/contacts/create
    postCreate(req, res, next) {
        const contact = new Contact(req.body);
        contact
            .save()
            .then(() => {
                req.flash("success", "Create a new contact successfully!");
                res.redirect("/me/stored/contacts");
            })
            .catch(next);
    }

    // [GET]/contacts/:id/edit
    edit(req, res, next) {
        Contact.findById(req.params.id)
            .then((contact) => res.render("contacts/edit", { contact }))
            .catch(next);
    }

    // [PUT]/contacts/:id
    update(req, res, next) {
        Contact.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                req.flash("success", "Update this contact successfully!");
                res.redirect("/me/stored/contacts");
            })
            .catch(next);
    }

    // [DELETE]/contacts/:id
    delete(req, res, next) {
        Contact.delete({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Successfully saved this contact to trash!"
                );
                res.redirect("back");
            })
            .catch(next);
    }

    // [PATCH]/contacts/:id/restore
    restore(req, res, next) {
        Contact.restore({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Restore this contact successfully!");
                res.redirect("/me/stored/contacts");
            })
            .catch(next);
    }

    // [DELETE]/contacts/:id/force
    forceDelete(req, res, next) {
        Contact.deleteOne({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Delete this contact successfully!");
                res.redirect("back");
            })
            .catch(next);
    }
}

module.exports = new ContactController();

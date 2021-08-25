const SystemInfo = require("../models/SystemInfo");

class SystemInfoController {
    // [GET]/system/info/create
    create(req, res) {
        res.render("system/info/create");
    }

    // [POST]/system/info/create
    postCreate(req, res, next) {
        const systemInfo = new SystemInfo(req.body);
        systemInfo
            .save()
            .then(() => {
                req.flash("success", "Create a new system info successfully!");
                res.redirect("/me/stored/system/info");
            })
            .catch(next);
    }

    // [GET]/system/info/:id/edit
    edit(req, res, next) {
        SystemInfo.findById(req.params.id)
            .then((systemInfo) =>
                res.render("system/info/edit", { systemInfo })
            )
            .catch(next);
    }

    // [PUT]/system/info/:id
    update(req, res, next) {
        SystemInfo.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                req.flash("success", "Update this system info successfully!");
                res.redirect("/me/stored/system/info");
            })
            .catch(next);
    }

    // [DELETE]/system/info/:id
    delete(req, res, next) {
        SystemInfo.delete({ _id: req.params.id })
            .then(() => {
                req.flash(
                    "success",
                    "Successfully saved this system info to trash!"
                );
                res.redirect("back");
            })
            .catch(next);
    }

    // [PATCH]/system/info/:id/restore
    restore(req, res, next) {
        SystemInfo.restore({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Restore this system info successfully!");
                res.redirect("/me/stored/system/info");
            })
            .catch(next);
    }

    // [DELETE]/system/info/:id/force
    forceDelete(req, res, next) {
        SystemInfo.deleteOne({ _id: req.params.id })
            .then(() => {
                req.flash("success", "Delete this system info successfully!");
                res.redirect("back");
            })
            .catch(next);
    }

    // [POST]/system/info/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case "delete":
                SystemInfo.delete({ _id: { $in: req.body.systemInfoIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All system info have been successfully saved to the trash!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "restore":
                SystemInfo.restore({ _id: { $in: req.body.systemInfoIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All system info have been restored successfully!"
                        );
                        res.redirect("back");
                    })
                    .catch(next);
                break;
            case "force-delete":
                SystemInfo.deleteMany({ _id: { $in: req.body.systemInfoIds } })
                    .then(() => {
                        req.flash(
                            "success",
                            "All system info have been deleted successfully!"
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

module.exports = new SystemInfoController();

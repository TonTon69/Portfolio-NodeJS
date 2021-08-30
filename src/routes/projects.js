const express = require("express");
const router = express.Router();

const projectController = require("../app/controllers/ProjectController");
const {
    requireAuth,
    checkAdmin,
} = require("../app/middlewares/AuthMiddleware");

router.get("/create", requireAuth, checkAdmin, projectController.create);
router.post("/create", requireAuth, checkAdmin, projectController.postCreate);
router.post(
    "/handle-form-actions",
    requireAuth,
    checkAdmin,
    projectController.handleFormActions
);
router.get("/:id/edit", requireAuth, checkAdmin, projectController.edit);
router.put("/:id", requireAuth, checkAdmin, projectController.update);
router.patch(
    "/:id/restore",
    requireAuth,
    checkAdmin,
    projectController.restore
);
router.delete("/:id", requireAuth, checkAdmin, projectController.delete);
router.delete(
    "/:id/force",
    requireAuth,
    checkAdmin,
    projectController.forceDelete
);
router.get("/:slug", projectController.show);

module.exports = router;

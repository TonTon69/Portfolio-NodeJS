const express = require("express");
const router = express.Router();

const projectController = require("../app/controllers/ProjectController");
const authMiddleware = require("../app/middlewares/AuthMiddleware");

router.get(
    "/create",
    authMiddleware.requireAuth,
    authMiddleware.checkAdmin,
    projectController.create
);
router.post(
    "/create",
    authMiddleware.requireAuth,
    authMiddleware.checkAdmin,
    projectController.postCreate
);
router.post(
    "/handle-form-actions",
    authMiddleware.requireAuth,
    authMiddleware.checkAdmin,
    projectController.handleFormActions
);
router.get(
    "/:id/edit",
    authMiddleware.requireAuth,
    authMiddleware.checkAdmin,
    projectController.edit
);
router.put(
    "/:id",
    authMiddleware.requireAuth,
    authMiddleware.checkAdmin,
    projectController.update
);
router.patch(
    "/:id/restore",
    authMiddleware.requireAuth,
    authMiddleware.checkAdmin,
    projectController.restore
);
router.delete(
    "/:id",
    authMiddleware.requireAuth,
    authMiddleware.checkAdmin,
    projectController.delete
);
router.delete(
    "/:id/force",
    authMiddleware.requireAuth,
    authMiddleware.checkAdmin,
    projectController.forceDelete
);
router.get("/:slug", projectController.show);

module.exports = router;

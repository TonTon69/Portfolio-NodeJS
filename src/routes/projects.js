const express = require("express");
const router = express.Router();

const projectController = require("../app/controllers/ProjectController");

router.get("/create", projectController.create);
router.post("/create", projectController.postCreate);
router.post("/handle-form-actions", projectController.handleFormActions);
router.get("/:id/edit", projectController.edit);
router.put("/:id", projectController.update);
router.patch("/:id/restore", projectController.restore);
router.delete("/:id", projectController.delete);
router.delete("/:id/force", projectController.forceDelete);

module.exports = router;

const express = require("express");
const router = express.Router();

const experienceController = require("../app/controllers/ExperienceController");

router.get("/create", experienceController.create);
router.post("/create", experienceController.postCreate);
router.post("/handle-form-actions", experienceController.handleFormActions);
router.get("/:id/edit", experienceController.edit);
router.put("/:id", experienceController.update);
router.patch("/:id/restore", experienceController.restore);
router.delete("/:id", experienceController.delete);
router.delete("/:id/force", experienceController.forceDelete);

module.exports = router;

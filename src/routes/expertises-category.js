const express = require("express");
const router = express.Router();

const expertiseCategoryController = require("../app/controllers/ExpertiseCategoryController");

router.get("/create", expertiseCategoryController.create);
router.post("/create", expertiseCategoryController.postCreate);
router.post(
    "/handle-form-actions",
    expertiseCategoryController.handleFormActions
);
router.get("/:id/edit", expertiseCategoryController.edit);
router.put("/:id", expertiseCategoryController.update);
router.patch("/:id/restore", expertiseCategoryController.restore);
router.delete("/:id", expertiseCategoryController.delete);
router.delete("/:id/force", expertiseCategoryController.forceDelete);

module.exports = router;

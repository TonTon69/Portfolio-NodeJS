const express = require("express");
const router = express.Router();

const projectController = require("../app/controllers/ProjectController");

router.get("/create", projectController.create);
router.post("/create", projectController.postCreate);
router.get("/:id/edit", projectController.edit);
router.put("/:id", projectController.update);

module.exports = router;

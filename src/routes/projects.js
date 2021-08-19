const express = require("express");
const router = express.Router();

const projectController = require("../app/controllers/ProjectController");

router.get("/create", projectController.create);
router.post("/create", projectController.postCreate);

module.exports = router;

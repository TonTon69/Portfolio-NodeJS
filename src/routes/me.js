const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/stored/projects", meController.storedProjects);
router.get("/trash/projects", meController.trashProjects);
router.get("/stored/contacts", meController.storedContacts);
router.get("/trash/contacts", meController.trashContacts);
router.get("/stored/awards", meController.storedAwards);
router.get("/trash/awards", meController.trashAwards);
router.get("/stored/educations", meController.storedEducations);
router.get("/trash/educations", meController.trashEducations);
router.get("/stored/experiences", meController.storedExperiences);
router.get("/trash/experiences", meController.trashExperiences);
router.get(
    "/stored/expertises/categories",
    meController.storedExpertisesCategories
);
router.get(
    "/trash/expertises/categories",
    meController.trashExpertisesCategories
);
module.exports = router;

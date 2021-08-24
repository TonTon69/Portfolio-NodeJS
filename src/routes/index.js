const siteRouter = require("./site");
const projectsRouter = require("./projects");
const contactsRouter = require("./contacts");
const awardsRouter = require("./awards");
const educationsRouter = require("./educations");
const experiencesRouter = require("./experiences");
const expertisesCategoryRouter = require("./expertises-category");
const meRouter = require("./me");

function route(app) {
    app.use("/", siteRouter);
    app.use("/projects", projectsRouter);
    app.use("/contacts", contactsRouter);
    app.use("/awards", awardsRouter);
    app.use("/educations", educationsRouter);
    app.use("/experiences", experiencesRouter);
    app.use("/expertises/category", expertisesCategoryRouter);
    app.use("/me", meRouter);
}

module.exports = route;

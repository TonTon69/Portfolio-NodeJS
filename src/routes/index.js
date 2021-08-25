const siteRouter = require("./site");
const projectsRouter = require("./projects");
const contactsRouter = require("./contacts");
const awardsRouter = require("./awards");
const educationsRouter = require("./educations");
const experiencesRouter = require("./experiences");
const expertisesRouter = require("./expertises");
const expertisesCategoryRouter = require("./expertises-category");
const systemInfoRouter = require("./system-info");
const meRouter = require("./me");
const authRouter = require("./auth");

function route(app) {
    app.use("/", siteRouter);
    app.use("/projects", projectsRouter);
    app.use("/contacts", contactsRouter);
    app.use("/awards", awardsRouter);
    app.use("/educations", educationsRouter);
    app.use("/experiences", experiencesRouter);
    app.use("/expertises", expertisesRouter);
    app.use("/expertises/category", expertisesCategoryRouter);
    app.use("/system/info", systemInfoRouter);
    app.use("/me", meRouter);
    app.use("/auth", authRouter);
}

module.exports = route;

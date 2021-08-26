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

const authMiddleware = require("../app/middlewares/AuthMiddleware");

function route(app) {
    app.use("/", siteRouter);
    app.use("/projects", authMiddleware, projectsRouter);
    app.use("/contacts", authMiddleware, contactsRouter);
    app.use("/awards", authMiddleware, awardsRouter);
    app.use("/educations", authMiddleware, educationsRouter);
    app.use("/experiences", authMiddleware, experiencesRouter);
    app.use("/expertises", authMiddleware, expertisesRouter);
    app.use("/expertises/category", authMiddleware, expertisesCategoryRouter);
    app.use("/system/info", authMiddleware, systemInfoRouter);
    app.use("/me", authMiddleware, meRouter);
    app.use("/auth", authRouter);
}

module.exports = route;

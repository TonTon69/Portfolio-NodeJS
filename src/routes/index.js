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

const {
    requireAuth,
    checkAdmin,
} = require("../app/middlewares/AuthMiddleware");

function route(app) {
    app.use("/", siteRouter);
    app.use("/projects", projectsRouter);
    app.use("/contacts", requireAuth, checkAdmin, contactsRouter);
    app.use("/awards", requireAuth, checkAdmin, awardsRouter);
    app.use("/educations", requireAuth, checkAdmin, educationsRouter);
    app.use("/experiences", requireAuth, checkAdmin, experiencesRouter);
    app.use("/expertises", requireAuth, checkAdmin, expertisesRouter);
    app.use(
        "/expertises/category",
        requireAuth,
        checkAdmin,
        expertisesCategoryRouter
    );
    app.use("/system/info", requireAuth, checkAdmin, systemInfoRouter);
    app.use("/me", requireAuth, checkAdmin, meRouter);
    app.use("/auth", authRouter);
}

module.exports = route;

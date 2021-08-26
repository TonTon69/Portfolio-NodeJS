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
    app.use(
        "/projects",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        projectsRouter
    );
    app.use(
        "/contacts",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        contactsRouter
    );
    app.use(
        "/awards",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        awardsRouter
    );
    app.use(
        "/educations",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        educationsRouter
    );
    app.use(
        "/experiences",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        experiencesRouter
    );
    app.use(
        "/expertises",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        expertisesRouter
    );
    app.use(
        "/expertises/category",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        expertisesCategoryRouter
    );
    app.use(
        "/system/info",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        systemInfoRouter
    );
    app.use(
        "/me",
        authMiddleware.requireAuth,
        authMiddleware.checkAdmin,
        meRouter
    );
    app.use("/auth", authRouter);
}

module.exports = route;

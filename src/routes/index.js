const siteRouter = require("./site");
const projectsRouter = require("./projects");
const meRouter = require("./me");

function route(app) {
    app.use("/", siteRouter);
    app.use("/projects", projectsRouter);
    app.use("/me", meRouter);
}

module.exports = route;

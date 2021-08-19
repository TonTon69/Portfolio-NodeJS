const siteRouter = require("./site");
const projectsRouter = require("./projects");
const adminRouter = require("./admin");

function route(app) {
    app.use("/", siteRouter);
    app.use("/projects", projectsRouter);
    app.use("/admin", adminRouter);
}

module.exports = route;

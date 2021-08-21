const siteRouter = require("./site");
const projectsRouter = require("./projects");
const contactsRouter = require("./contacts");
const meRouter = require("./me");

function route(app) {
    app.use("/", siteRouter);
    app.use("/projects", projectsRouter);
    app.use("/contacts", contactsRouter);
    app.use("/me", meRouter);
}

module.exports = route;

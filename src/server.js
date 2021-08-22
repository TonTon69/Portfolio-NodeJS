require("dotenv").config();

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const pug = require("pug");

const methodOverride = require("method-override");
const moment = require("moment");
const session = require("express-session");
const flash = require("connect-flash");

const SortMiddleware = require("./app/middlewares/SortMiddleware");

const route = require("./routes");
const db = require("./config/db");

// Connect db
db.connect();

const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP request logger middleware for node.js
app.use(morgan("combined"));

// Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(methodOverride("_method"));

app.locals.moment = moment;

// Custom middleware
app.use(SortMiddleware);

//
app.use(
    session({
        cookie: { maxAge: 60000 },
        saveUninitialized: true,
        resave: "true",
        secret: "secret",
    })
);
app.use(flash());

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

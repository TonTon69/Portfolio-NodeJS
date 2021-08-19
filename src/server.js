require("dotenv").config();

const path = require("path");
const express = require("express");
const morgan = require("morgan");

const methodOverride = require("method-override");

const moment = require("moment");

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

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

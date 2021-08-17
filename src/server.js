const path = require("path");
const express = require("express");
const morgan = require("morgan");
const pug = require("pug");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP request logger middleware for node.js
app.use(morgan("combined"));

// Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

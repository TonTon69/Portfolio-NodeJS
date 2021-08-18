const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

const route = require("./routes");

// Static file
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP request logger middleware for node.js
app.use(morgan("combined"));

// Template engine
app.set("views", path.join(__dirname, "resources", "views"));
app.set("view engine", "pug");

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

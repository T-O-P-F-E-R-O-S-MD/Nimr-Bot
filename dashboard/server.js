const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("login", {
        botName: "TOPFEROS MD",
        version: "1.0.0"
    });
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        botName: "TOPFEROS MD"
    });
});

app.get("/settings", (req, res) => {
    res.render("settings");
});

app.get("/plugins", (req, res) => {
    res.render("plugins");
});

app.get("/users", (req, res) => {
    res.render("users");
});

app.get("/pair", (req, res) => {
    res.render("pair");
});

module.exports = app;
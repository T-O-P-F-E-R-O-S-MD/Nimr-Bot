/**
 * ==========================================
 * TOPFEROS MD
 * Developer: TOPFEROS TECH
 * ==========================================
 */

require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "dashboard/views"));

// Static Files
app.use(express.static(path.join(__dirname, "dashboard/public")));

// Home
app.get("/", (req, res) => {
    res.redirect("/login");
});

// Login Page
app.get("/login", (req, res) => {
    res.render("login", {
        botName: "TOPFEROS MD",
        version: "1.0.0"
    });
});

// Dashboard
app.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        botName: "TOPFEROS MD"
    });
});

// Settings
app.get("/settings", (req, res) => {
    res.render("settings");
});

// Plugins
app.get("/plugins", (req, res) => {
    res.render("plugins");
});

// Users
app.get("/users", (req, res) => {
    res.render("users");
});

// Pair Code
app.get("/pair", (req, res) => {
    res.render("pair");
});

app.listen(PORT, () => {
    console.log("==================================");
    console.log("🤖 TOPFEROS MD Started");
    console.log(`🌐 Dashboard: http://localhost:${PORT}`);
    console.log("==================================");
});
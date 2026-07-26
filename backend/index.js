/**
 * ============================================
 * TOPFEROS MD
 * WhatsApp Multi Device Bot
 * Developer: TOPFEROS TECH
 * ============================================
 */

require("dotenv").config();

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const cors = require("cors");

const api = require("./src/routes/api");
const { connectBot } = require("./src/connection/connect");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/api", api);

// Static Files
app.use(express.static("public"));

// Home Route
app.get("/", (req, res) => {
   
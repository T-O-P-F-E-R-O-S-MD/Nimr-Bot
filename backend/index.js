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

// ======================
// Middlewares
// ======================

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static Files
app.use(express.static("public"));

// API
app.use("/api", api);

// ======================
// Home Route
// ======================

app.get("/", (req, res) => {
    res.json({
        success: true,
        name: "TOPFEROS MD",
        version: "1.0.0",
        status: "Running",
        developer: "TOPFEROS TECH"
    });
});

// ======================
// Socket.IO
// ======================

io.on("connection", (socket) => {

    console.log(chalk.green("🟢 Dashboard Connected"));

    socket.on("disconnect", () => {
        console.log(chalk.red("🔴 Dashboard Disconnected"));
    });

});

// ======================
// Start Server
// ======================

server.listen(PORT, async () => {

    console.clear();

    console.log(chalk.green(`
╔════════════════════════════════════╗
║           TOPFEROS MD             ║
╠════════════════════════════════════╣
║ 🚀 Backend Started Successfully   ║
║ 🌐 Dashboard Ready                ║
║ 🤖 Starting WhatsApp...           ║
╚════════════════════════════════════╝
`));

    console.log(chalk.cyan(`🌐 Server : http://localhost:${PORT}`));

    try {

        await connectBot();

        console.log(chalk.green("✅ WhatsApp Connected Successfully"));

    } catch (err) {

        console.log(chalk.red("❌ Failed To Connect WhatsApp"));
        console.error(err);

    }

});
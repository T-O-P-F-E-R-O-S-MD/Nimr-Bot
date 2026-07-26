/**
 * ==========================================
 * TOPFEROS MD Configuration
 * Developer: TOPFEROS TECH
 * ==========================================
 */

require("dotenv").config();

module.exports = {

    // =========================
    // Bot
    // =========================
    BOT_NAME: process.env.BOT_NAME || "TOPFEROS MD",
    VERSION: process.env.BOT_VERSION || "1.0.0",
    PREFIX: process.env.PREFIX || ".",

    // =========================
    // Owner
    // =========================
    OWNER_NAME: process.env.OWNER_NAME || "TOPFEROS TECH",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "509XXXXXXXX",

    // =========================
    // Website
    // =========================
    WEBSITE: process.env.WEBSITE || "https://topferosmdconnect.com",

    // =========================
    // Server
    // =========================
    PORT: process.env.PORT || 3000,

    // =========================
    // Dashboard
    // =========================
    DASHBOARD: {
        USERNAME: process.env.DASHBOARD_USERNAME || "admin",
        PASSWORD: process.env.DASHBOARD_PASSWORD || "admin123"
    },

    // =========================
    // APIs
    // =========================
    API: {
        OPENAI: process.env.OPENAI_API_KEY || "",
        GEMINI: process.env.GEMINI_API_KEY || ""
    },

    // =========================
    // Database
    // =========================
    DATABASE: {
        URI: process.env.MONGODB_URI || ""
    },

    // =========================
    // Images
    // =========================

    // Used in: Menu, Settings, Alive, Owner...
    BOT_IMAGE:
        process.env.BOT_IMAGE ||
        "https://drive.google.com/uc?export=download&id=12f6XuXaVykA-OkR9ddTo5qxViUuwXcFI",

    // Used in: Welcome & Goodbye
    WELCOME_IMAGE:
        process.env.WELCOME_IMAGE ||
        "https://drive.google.com/uc?export=download&id=12f6XuXaVykA-OkR9ddTo5qxViUuwXcFI",

    // =========================
    // Mode
    // =========================
    MODE: process.env.MODE || "public",

    // =========================
    // Features
    // =========================
    FEATURES: {

        AUTO_REACT: true,
        AUTO_STATUS_SEEN: true,
        AUTO_STATUS_REPLY: true,
        AUTO_READ: true,
        ALWAYS_ONLINE: true,

        ANTI_CALL: true,
        ANTI_DELETE: true,
       
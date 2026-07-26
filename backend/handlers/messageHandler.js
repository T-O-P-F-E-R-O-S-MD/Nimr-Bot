/**
 * ============================================
 * TOPFEROS MD - MESSAGE HANDLER
 * Developer: TOPFEROS TECH
 * ============================================
 */

const { getPlugins } = require("../utils/pluginLoader");
const config = require("../config/config");
const { saveMessage } = require("../utils/messageStore");

const emojis = [
    "❤️",
    "👍",
    "🔥",
    "😍",
    "😂",
    "🥰",
    "🤩",
    "💯",
    "⚡",
    "✨",
    "😎",
    "🎉"
];

async function messageHandler(sock, message) {

    try {

        if (!message?.messages?.length) return;

        const msg = message.messages[0];

        if (!msg?.message) return;

        if (msg.key?.fromMe) return;

        if (!msg.key?.remoteJid) return;

        // ===================================
        // Save Message (Anti Delete)
        // ===================================

        try {

            saveMessage(msg);

        } catch (err) {

            console.error("❌ Save Message:", err.message);

        }

        // ===================================
        // Ignore Status (Optional)
        // ===================================

        if (
            msg.key.remoteJid === "status@broadcast" &&
            !config.FEATURES.AUTO_STATUS_REPLY
        ) {
            return;
        }

        // ===================================
        // Auto Read
        // ===================================

        if (config.FEATURES.AUTO_READ) {

            try {

                await sock.readMessages([msg.key]);

            } catch (err)
/**
 * ============================================
 * TOPFEROS MD - MESSAGE HANDLER
 * Developer: TOPFEROS TECH
 * ============================================
 */

const { getPlugins } = require("../utils/pluginLoader");
const config = require("../config/config");

async function messageHandler(sock, message) {

    try {

        if (!message?.messages?.length) return;

        const msg = message.messages[0];

        if (!msg || !msg.message) return;

        if (msg.key?.fromMe) return;

        // ===================================
        // Ignore Broadcast / Status
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
            } catch (err) {
                console.error("Auto Read Error:", err.message);
            }

        }

        // ===================================
        // Auto View Once (Coming Soon)
        // ===================================

        const quoted =
            msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;

        if (quoted) {

            if (
                quoted.viewOnceMessage ||
                quoted.viewOnceMessageV2 ||
                quoted.viewOnceMessageV2Extension
            ) {

                // Auto View Once Logic

            }

        }

        // ===================================
        // Execute Commands
        // ===================================

        const plugins = getPlugins();

        for (const plugin of plugins) {

            try {

                if (typeof plugin.execute === "function") {
                    await plugin.execute(sock, msg);
                }

            } catch (err) {

                console.error(
                    `❌ ${plugin.name || "Unknown Plugin"} Error`
                );

                console.error(err);

            }

        }

    } catch (err) {

        console.error("Message Handler Error:", err);

    }

}

module.exports = messageHandler;
/**
 * ============================================
 * TOPFEROS MD - TOURL COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "tourl",
    aliases: ["url", "upload"],
    category: "Media",
    description: "Upload media and generate URL",

    async execute(sock, msg) {

        const text =
            msg.message?.conversation ||
            msg.message?.extendedTextMessage?.text ||
            "";

        const prefix = config.PREFIX || ".";

        if (!text.startsWith(prefix)) return;

        const command = text
            .slice(prefix.length)
            .trim()
            .split(" ")[0]
            .toLowerCase();

        if (
            command !== "tourl" &&
            command !== "url" &&
            command !== "upload"
        ) return;

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption: `🌐 *TOPFEROS MD TO URL*

Reply to an image, video or audio with:

${prefix}tourl

━━━━━━━━━━━━━━━━━━━━━━━

Supported:
🖼️ Image
🎥 Video
🎵 Audio

⚠️ Upload to URL module is under development.`
            },
            {
                quoted: msg
            }
        );

    }
};
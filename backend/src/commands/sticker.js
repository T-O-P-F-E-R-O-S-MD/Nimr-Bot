/**
 * ============================================
 * TOPFEROS MD - STICKER COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "sticker",
    aliases: ["s", "stick"],
    category: "Media",
    description: "Convert image or video to sticker",

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
            command !== "sticker" &&
            command !== "s" &&
            command !== "stick"
        ) return;

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption: `🖼️ *TOPFEROS MD STICKER*

Reply to an image or a short video with:

${prefix}sticker

⚠️ Sticker module is under development.`
            },
            {
                quoted: msg
            }
        );

    }
};
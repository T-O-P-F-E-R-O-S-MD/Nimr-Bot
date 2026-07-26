/**
 * ============================================
 * TOPFEROS MD - TOIMG COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "toimg",
    aliases: ["img", "toimage"],
    category: "Media",
    description: "Convert sticker to image",

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
            command !== "toimg" &&
            command !== "img" &&
            command !== "toimage"
        ) return;

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption: `🖼️ *TOPFEROS MD TO IMAGE*

Reply to a sticker with:

${prefix}toimg

⚠️ Sticker to Image module is under development.`
            },
            {
                quoted: msg
            }
        );

    }
};
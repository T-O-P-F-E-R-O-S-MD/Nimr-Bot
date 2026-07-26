/**
 * ============================================
 * TOPFEROS MD - FACEBOOK COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "facebook",
    aliases: ["fb", "fbdl"],
    category: "Download",
    description: "Download Facebook videos",

    async execute(sock, msg) {

        const text =
            msg.message?.conversation ||
            msg.message?.extendedTextMessage?.text ||
            "";

        const prefix = config.PREFIX || ".";

        if (!text.startsWith(prefix)) return;

        const args = text.slice(prefix.length).trim().split(" ");
        const command = args.shift().toLowerCase();

        if (
            command !== "facebook" &&
            command !== "fb" &&
            command !== "fbdl"
        ) return;

        if (args.length === 0) {

            return await sock.sendMessage(
                msg.key.remoteJid,
                {
                    text:
`❌ Please provide a Facebook video link.

Example:
.facebook https://www.facebook.com/...`
                },
                {
                    quoted: msg
                }
            );

        }

        const url = args.join(" ");

        // TODO:
        // Download Facebook Video
        // Send HD Video

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption:
`📘 *TOPFEROS MD FACEBOOK*

🔗 Link:
${url}

⏳ Downloading Facebook Video...

⚠️ Facebook Downloader module is under development.`
            },
            {
                quoted: msg
            }
        );

    }
};
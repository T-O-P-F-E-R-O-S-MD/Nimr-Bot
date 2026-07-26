/**
 * ============================================
 * TOPFEROS MD - VIDEO COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "video",
    aliases: ["ytvideo", "mp4"],
    category: "Download",
    description: "Download YouTube video",

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
            command !== "video" &&
            command !== "ytvideo" &&
            command !== "mp4"
        ) return;

        if (args.length === 0) {

            return await sock.sendMessage(
                msg.key.remoteJid,
                {
                    text:
`❌ Please provide a YouTube video name or link.

Example:
.video https://youtu.be/xxxxxxxx`
                },
                { quoted: msg }
            );

        }

        const query = args.join(" ");

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption:
`🎬 *TOPFEROS MD VIDEO*

🔎 Request:
${query}

⏳ Searching YouTube...

⚠️ Video Downloader module is under development.`
            },
            {
                quoted: msg
            }
        );

    }
};
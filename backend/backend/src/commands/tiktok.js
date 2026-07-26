/**
 * ============================================
 * TOPFEROS MD - TIKTOK COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "tiktok",
    aliases: ["tt", "tk"],
    category: "Download",
    description: "Download TikTok video",

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
            command !== "tiktok" &&
            command !== "tt" &&
            command !== "tk"
        ) return;

        if (args.length === 0) {

            return await sock.sendMessage(
                msg.key.remoteJid,
                {
                    text:
`❌ Please provide a TikTok link.

Example:
.tiktok https://www.tiktok.com/...`
                },
                { quoted: msg }
            );

        }

        const url = args.join(" ");

        // TODO:
        // Detect TikTok URL
        // Download video (No Watermark)
        // Send video

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption:
`🎵 *TOPFEROS MD TIKTOK*

🔗 Link:
${url}

⏳ Downloading TikTok Video...

⚠️ TikTok Downloader module is under development.`
            },
            {
                quoted: msg
            }
        );

    }
};
/**
 * ============================================
 * TOPFEROS MD - PLAY COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "play",
    aliases: ["song", "music"],
    category: "Download",
    description: "Search and download music",

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
            command !== "play" &&
            command !== "song" &&
            command !== "music"
        ) return;

        if (args.length === 0) {

            return await sock.sendMessage(
                msg.key.remoteJid,
                {
                    text:
`❌ Please provide a song name.

Example:
.play Shape of You`
                },
                { quoted: msg }
            );

        }

        const query = args.join(" ");

        // TODO:
        // Search YouTube
        // Download Audio
        // Send MP3

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption:
`🎵 *TOPFEROS MD MUSIC*

🔎 Search:
${query}

⏳ Searching YouTube...

⚠️ Downloader module is under development.`
            },
            {
                quoted: msg
            }
        );

    }
};
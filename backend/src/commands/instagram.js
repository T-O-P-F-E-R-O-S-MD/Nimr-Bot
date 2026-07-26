/**
 * ============================================
 * TOPFEROS MD - INSTAGRAM COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "instagram",
    aliases: ["ig", "igdl"],
    category: "Download",
    description: "Download Instagram videos and photos",

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
            command !== "instagram" &&
            command !== "ig" &&
            command !== "igdl"
        ) return;

        if (args.length === 0) {

            return await sock.sendMessage(
                msg.key.remoteJid,
                {
                    text:
`❌ Please provide an Instagram link.

Example:
.instagram https://www.instagram.com/reel/...`
                },
                {
                    quoted: msg
                }
            );

        }

        const url = args.join(" ");

        // TODO:
        // Download Instagram Video/Photo
        // Send Media

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption:
`📷 *TOPFEROS MD INSTAGRAM*

🔗 Link:
${url}

⏳ Downloading Instagram Media...

⚠️ Instagram Downloader module is under development.`
            },
            {
                quoted: msg
            }
        );

    }
};
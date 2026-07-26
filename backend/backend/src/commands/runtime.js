/**
 * ============================================
 * TOPFEROS MD - RUNTIME COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "runtime",
    aliases: ["uptime"],
    category: "Main",
    description: "Show bot uptime",

    async execute(sock, msg) {

        const text =
            msg.message?.conversation ||
            msg.message?.extendedTextMessage?.text ||
            "";

        const prefix = config.PREFIX || ".";

        if (!text.startsWith(prefix)) return;

        const command = text.slice(prefix.length).trim().toLowerCase();

        if (
            command !== "runtime" &&
            command !== "uptime"
        ) return;

        const uptime = process.uptime();

        const days = Math.floor(uptime / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        const caption = `
╭━━━━━━━━━━━━━━━━━━━━━━━╮
┃ ⏱ *TOPFEROS MD RUNTIME*
╰━━━━━━━━━━━━━━━━━━━━━━━╯

🤖 Bot : ${config.BOT_NAME}

📆 Uptime

${days} Day(s)
${hours} Hour(s)
${minutes} Minute(s)
${seconds} Second(s)

🌐 Website
${config.WEBSITE}

Powered by TOPFEROS TECH
`;

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption
            },
            {
                quoted: msg
            }
        );
    }
};
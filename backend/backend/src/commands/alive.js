/**
 * ============================================
 * TOPFEROS MD - ALIVE COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const os = require("os");
const config = require("../config/config");

module.exports = {
    name: "alive",
    aliases: ["bot", "status"],
    category: "Main",
    description: "Check if TOPFEROS MD is online",

    async execute(sock, msg) {

        const text =
            msg.message?.conversation ||
            msg.message?.extendedTextMessage?.text ||
            "";

        const prefix = config.PREFIX || ".";

        if (!text.startsWith(prefix)) return;

        const command = text.slice(prefix.length).trim().toLowerCase();

        if (
            command !== "alive" &&
            command !== "bot" &&
            command !== "status"
        ) return;

        const uptime = process.uptime();

        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        const caption = `
╭━━━━━━━━━━━━━━━━━━━━━━━╮
┃ 🤖 *TOPFEROS MD*
╰━━━━━━━━━━━━━━━━━━━━━━━╯

✅ Bot Status : Online
🤖 Name : ${config.BOT_NAME}
📦 Version : ${config.VERSION}
👑 Developer : ${config.OWNER_NAME}
🌍 Mode : ${config.MODE}

⏱ Runtime :
${hours}h ${minutes}m ${seconds}s

💻 Platform :
${os.platform()} (${os.arch()})

🌐 Website :
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
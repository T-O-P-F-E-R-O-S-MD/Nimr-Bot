/**
 * ============================================
 * TOPFEROS MD - OWNER COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "owner",
    aliases: ["creator", "dev"],
    category: "Main",
    description: "Show owner information",

    async execute(sock, msg) {

        const text =
            msg.message?.conversation ||
            msg.message?.extendedTextMessage?.text ||
            "";

        const prefix = config.PREFIX || ".";

        if (!text.startsWith(prefix)) return;

        const command = text.slice(prefix.length).trim().toLowerCase();

        if (
            command !== "owner" &&
            command !== "creator" &&
            command !== "dev"
        ) return;

        const caption = `
╭━━━━━━━━━━━━━━━━━━━━━━━╮
┃ 👑 *BOT OWNER*
╰━━━━━━━━━━━━━━━━━━━━━━━╯

👤 Name : ${config.OWNER_NAME}

📱 Number : +${config.OWNER_NUMBER}

🤖 Bot : ${config.BOT_NAME}

🌐 Website :
${config.WEBSITE}

━━━━━━━━━━━━━━━━━━━━━━━

Thank you for using
*TOPFEROS MD* ❤️
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
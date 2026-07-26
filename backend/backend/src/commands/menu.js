/**
 * ============================================
 * TOPFEROS MD - MENU COMMAND
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "menu",
    aliases: ["help", "commands"],
    category: "Main",
    description: "Show all available commands",

    async execute(sock, msg) {

        const sender = msg.pushName || "User";
        const prefix = config.PREFIX || ".";

        const menu = `
╭━━━━━━━━━━━━━━━━━━━━━━━╮
┃ 🤖 *TOPFEROS MD*
╰━━━━━━━━━━━━━━━━━━━━━━━╯

👋 Hello ${sender}

⚡ Prefix : ${prefix}
🤖 Version : 1.0.0
👑 Developer : TOPFEROS TECH

━━━━━━━━━━━━━━━━━━━━━━━

🏠 *MAIN*
${prefix}menu
${prefix}ping
${prefix}alive
${prefix}owner
${prefix}runtime

━━━━━━━━━━━━━━━━━━━━━━━

🤖 *AI*
${prefix}ai
${prefix}gpt
${prefix}gemini
${prefix}imagine

━━━━━━━━━━━━━━━━━━━━━━━

📥 *DOWNLOAD*
${prefix}play
${prefix}song
${prefix}video
${prefix}tiktok
${prefix}facebook
${prefix}instagram
${prefix}youtube

━━━━━━━━━━━━━━━━━━━━━━━

👥 *GROUP*
${prefix}tagall
${prefix}hidetag
${prefix}kick
${prefix}add
${prefix}promote
${prefix}demote
${prefix}link
${prefix}welcome

━━━━━━━━━━━━━━━━━━━━━━━

🖼️ *MEDIA*
${prefix}sticker
${prefix}toimg
${prefix}tourl
${prefix}vv

━━━━━━━━━━━━━━━━━━━━━━━

🎮 *FUN*
${prefix}truth
${prefix}dare
${prefix}quote
${prefix}joke

━━━━━━━━━━━━━━━━━━━━━━━

⚙️ *SETTINGS*
${prefix}settings
Generate your personal Settings Code & Dashboard Link

━━━━━━━━━━━━━━━━━━━━━━━

👑 *OWNER*
${prefix}restart
${prefix}shutdown
${prefix}broadcast
${prefix}block
${prefix}unblock

━━━━━━━━━━━━━━━━━━━━━━━

🌐 Dashboard
https://topferosmdconnect.com

Powered by TOPFEROS TECH
`;

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                text: menu
            },
            {
                quoted: msg
            }
        );

    }
};
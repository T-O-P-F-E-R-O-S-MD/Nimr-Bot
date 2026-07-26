/**
 * ============================================
 * TOPFEROS MD - VIEW ONCE
 * Developer: TOPFEROS TECH
 * ============================================
 */

const config = require("../config/config");

module.exports = {
    name: "vv",
    aliases: ["viewonce", "readviewonce"],
    category: "Media",
    description: "View Once is handled automatically.",

    async execute(sock, msg) {

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                image: {
                    url: config.BOT_IMAGE
                },
                caption: `👁️ *TOPFEROS MD*

❌ This command is no longer available.

✅ View Once works automatically.

━━━━━━━━━━━━━━━━━━━━━━━

📷 Reply to any View Once photo.

🎥 Reply to any View Once video.

💬 You can type any message.

TOPFEROS MD will automatically remove the View Once restriction.`
            },
            {
                quoted: msg
            }
        );

    }
};
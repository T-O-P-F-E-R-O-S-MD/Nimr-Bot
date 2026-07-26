module.exports = {

    name: "ping",
    description: "Check if TOPFEROS MD is online",

    async run(sock, msg) {

        try {

            const text =
                msg.message?.conversation ||
                msg.message?.extendedTextMessage?.text ||
                "";

            if (!text.startsWith(".")) return;

            const args = text.trim().split(" ");
            const command = args[0].slice(1).toLowerCase();

            if (command !== "ping") return;

            await sock.sendMessage(
                msg.key.remoteJid,
                {
                    text: "🏓 Pong!\n\n✅ TOPFEROS MD is Online."
                },
                {
                    quoted: msg
                }
            );

        } catch (err) {

            console.error("Ping Plugin Error:", err);

        }

    }

};
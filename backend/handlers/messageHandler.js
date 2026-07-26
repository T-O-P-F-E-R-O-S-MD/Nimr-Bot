const fs = require("fs");
const path = require("path");

async function messageHandler(sock, message) {

    if (!message.messages) return;

    const msg = message.messages[0];

    if (!msg.message) return;

    if (msg.key.fromMe) return;

    const pluginsPath = path.join(__dirname, "../plugins");

    if (!fs.existsSync(pluginsPath)) return;

    const plugins = fs.readdirSync(pluginsPath)
        .filter(file => file.endsWith(".js"));

    for (const file of plugins) {

        try {

            delete require.cache[require.resolve(path.join(pluginsPath, file))];

            const plugin = require(path.join(pluginsPath, file));

            if (typeof plugin.run === "function") {
                await plugin.run(sock, msg);
            }

        } catch (err) {

            console.error(`Plugin Error (${file}):`, err);

        }

    }

}

module.exports = messageHandler;
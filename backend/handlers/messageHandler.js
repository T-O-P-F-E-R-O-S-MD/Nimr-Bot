const { getPlugins } = require("../utils/pluginLoader");

async function messageHandler(sock, message) {

    if (!message.messages) return;

    const msg = message.messages[0];

    if (!msg.message) return;

    if (msg.key.fromMe) return;

    const plugins = getPlugins();

    for (const plugin of plugins) {

        try {

            if (typeof plugin.execute === "function") {
                await plugin.execute(sock, msg);
            }

        } catch (err) {

            console.error(`❌ ${plugin.name || "Unknown Plugin"} Error`);
            console.error(err);

        }

    }

}

module.exports = messageHandler;
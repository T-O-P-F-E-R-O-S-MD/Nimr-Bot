const fs = require("fs");
const path = require("path");

const plugins = [];

function loadPlugins() {

    plugins.length = 0;

    const pluginsPath = path.join(__dirname, "../plugins");

    if (!fs.existsSync(pluginsPath)) {
        console.log("⚠️ Plugins folder not found.");
        return plugins;
    }

    const files = fs.readdirSync(pluginsPath)
        .filter(file => file.endsWith(".js"));

    for (const file of files) {

        try {

            const filePath = path.join(pluginsPath, file);

            delete require.cache[require.resolve(filePath)];

            const plugin = require(filePath);

            plugins.push(plugin);

            console.log(`✅ Plugin Loaded: ${plugin.name || file}`);

        } catch (err) {

            console.log(`❌ Failed to load ${file}`);
            console.error(err);

        }

    }

    return plugins;

}

function getPlugins() {
    return plugins;
}

module.exports = {
    loadPlugins,
    getPlugins
};
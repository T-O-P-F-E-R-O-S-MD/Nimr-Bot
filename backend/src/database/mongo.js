/**
 * ==========================================
 * TOPFEROS MD MongoDB Connection
 * ==========================================
 */

const mongoose = require("mongoose");
const chalk = require("chalk");

async function connectDatabase() {

    const URI = process.env.MONGODB_URI;

    if (!URI) {
        console.log(chalk.yellow("⚠️ MongoDB URI not found."));
        return;
    }

    try {

        await mongoose.connect(URI, {
            autoIndex: true
        });

        console.log(chalk.green("✅ MongoDB Connected"));

    } catch (err) {

        console.log(chalk.red("❌ MongoDB Connection Failed"));
        console.error(err);

        process.exit(1);

    }

}

module.exports = {
    connectDatabase
};
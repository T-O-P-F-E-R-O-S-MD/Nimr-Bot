const {
    default: makeWASocket,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    DisconnectReason,
    Browsers
} = require("@whiskeysockets/baileys");

const Pino = require("pino");
const config = require("../config/config");
const { createOrUpdateUser } = require("../controllers/userController");
const messageHandler = require("../handlers/messageHandler");

let sock = null;
let qrCode = null;

async function connectBot() {

    const { state, saveCreds } =
        await useMultiFileAuthState("./session");

    const { version } =
        await fetchLatestBaileysVersion();

    sock = makeWASocket({
        version,
        auth: state,
        browser: Browsers.windows(config.BOT_NAME),
        logger: Pino({ level: "silent" }),
        printQRInTerminal: false,
        markOnlineOnConnect: true
    });

    sock.ev.on("creds.update", saveCreds);

    // Message Event
    sock.ev.on("messages.upsert", async (message) => {
        await messageHandler(sock, message);
    });

    sock.ev.on("connection.update", async (update) => {

        const { connection, qr, lastDisconnect } = update;

        if (qr) {
            qrCode = qr;
            console.log("📱 QR Code Generated");
        }

        if (connection === "open") {

            console.log(`✅ ${config.BOT_NAME} Connected`);

            const me = sock.user;

            if (me) {
                await createOrUpdateUser({
                    jid: me.id,
                    name: me.name || "Unknown",
                    number: me.id.split(":")[0]
                });
            }

        }

        if (connection === "close") {

            const reconnect =
                lastDisconnect?.error?.output?.statusCode !==
                DisconnectReason.loggedOut;

            if (reconnect) {
                console.log("♻️ Reconnecting...");
                connectBot();
            }

        }

    });

    return sock;
}

module.exports = {
    connectBot,
    getSocket: () => sock,
    getQR: () => qrCode
};
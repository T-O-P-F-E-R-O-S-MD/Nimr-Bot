const {
    default: makeWASocket,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    DisconnectReason,
    Browsers
} = require("@whiskeysockets/baileys");

const Pino = require("pino");
const config = require("../config/config");

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

        logger: Pino({
            level: "silent"
        }),

        printQRInTerminal: false,

        markOnlineOnConnect: true,

        syncFullHistory: false,

        generateHighQualityLinkPreview: true

    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", async (update) => {

        const {
            connection,
            qr,
            lastDisconnect
        } = update;

        if (qr) {

            qrCode = qr;

            console.log("📱 QR Code Generated");

        }

        if (connection === "open") {

            console.log(`✅ ${config.BOT_NAME} Connected`);

        }

        if (connection === "close") {

            const reconnect =
                lastDisconnect?.error?.output?.statusCode !==
                DisconnectReason.loggedOut;

            if (reconnect) {

                console.log("♻️ Reconnecting...");

                connectBot();

            } else {

                console.log("❌ Logged Out");

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
const {
    default: makeWASocket,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    DisconnectReason,
    Browsers
} = require("@whiskeysockets/baileys");

const pino = require("pino");

async function connect() {

    const { state, saveCreds } =
        await useMultiFileAuthState("./session");

    const { version } =
        await fetchLatestBaileysVersion();

    const sock = makeWASocket({

        version,

        auth: state,

        logger: pino({
            level: "silent"
        }),

        browser: Browsers.windows("TOPFEROS MD"),

        printQRInTerminal: false,

        markOnlineOnConnect: true,

        syncFullHistory: false,

        generateHighQualityLinkPreview: true

    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", async (update) => {

        const {
            connection,
            lastDisconnect,
            qr
        } = update;

        if (qr) {

            global.QR_CODE = qr;

            console.log("QR Generated");

        }

        if (connection === "open") {

            console.log("🟢 TOPFEROS MD Connected");

        }

        if (connection === "close") {

            const shouldReconnect =
                lastDisconnect?.error?.output?.statusCode !==
                DisconnectReason.loggedOut;

            if (shouldReconnect) {

                connect();

            }

        }

    });

    return sock;

}

module.exports = connect;
// =====================================
// NIMR BOT
// Developer: TOPFEROS TECH
// =====================================

require("./config");

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = require("@whiskeysockets/baileys");

const pino = require("pino");

async function startNimrBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: "silent" }),
    printQRInTerminal: true
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", ({ connection, lastDisconnect }) => {
    if (connection === "open") {
      console.log(`✅ ${global.BOT_NAME} Connected Successfully!`);
    }

    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;

      if (shouldReconnect) {
        console.log("🔄 Reconnecting...");
        startNimrBot();
      } else {
        console.log("❌ Logged Out.");
      }
    }
  });
}

startNimrBot();

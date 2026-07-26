const { getSocket } = require("../connection/connect");

async function generatePairCode(req, res) {
    try {
        const { number } = req.body;

        if (!number) {
            return res.status(400).json({
                success: false,
                message: "Phone number is required."
            });
        }

        const sock = getSocket();

        if (!sock) {
            return res.status(500).json({
                success: false,
                message: "WhatsApp is not connected."
            });
        }

        const phone = number.replace(/[^0-9]/g, "");

        const code = await sock.requestPairingCode(phone);

        return res.json({
            success: true,
            phone,
            pairCode: code
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            error: err.message
        });

    }
}

module.exports = {
    generatePairCode
};
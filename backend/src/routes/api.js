const express = require("express");
const QRCode = require("qrcode");

const router = express.Router();

const {
    getSocket,
    getQR
} = require("../connection/connect");

const {
    generatePairCode
} = require("../controllers/pairController");

// Home API
router.get("/", (req, res) => {

    res.json({

        success: true,

        bot: "TOPFEROS MD",

        version: "1.0.0",

        developer: "TOPFEROS TECH"

    });

});

// Bot Status
router.get("/status", (req, res) => {

    const sock = getSocket();

    res.json({

        connected: !!sock,

        bot: "TOPFEROS MD"

    });

});

// QR Code
router.get("/qr", async (req, res) => {

    try {

        const qr = getQR();

        if (!qr) {

            return res.json({

                success: false,

                message: "QR Code not available"

            });

        }

        const image = await QRCode.toDataURL(qr);

        res.json({

            success: true,

            qr: image

        });

    } catch (err) {

        res.status(500).json({

            success: false,

            error: err.message

        });

    }

});

// Pair Code
router.post("/pair", generatePairCode);

module.exports = router;
const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({

    jid: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        default: "Unknown Group"
    },

    welcome: {
        type: Boolean,
        default: true
    },

    goodbye: {
        type: Boolean,
        default: true
    },

    antiLink: {
        type: Boolean,
        default: false
    },

    antiSpam: {
        type: Boolean,
        default: true
    },

    antiDelete: {
        type: Boolean,
        default: true
    },

    antiViewOnce: {
        type: Boolean,
        default: true
    },

    groupLinkProtection: {
        type: Boolean,
        default: false
    },

    autoSticker: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Group", GroupSchema);
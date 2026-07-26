const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    jid: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        default: "Unknown"
    },

    number: {
        type: String,
        default: ""
    },

    connected: {
        type: Boolean,
        default: false
    },

    settings: {

        aiChat: {
            type: Boolean,
            default: true
        },

        autoReact: {
            type: Boolean,
            default: true
        },

        autoRead: {
            type: Boolean,
            default: true
        },

        antiCall: {
            type: Boolean,
            default: true
        },

        fakeTyping: {
            type: Boolean,
            default: true
        },

        fakeRecording: {
            type: Boolean,
            default: true
        },

        alwaysOnline: {
            type: Boolean,
            default: true
        },

        statusSaver: {
            type: Boolean,
            default: true
        }

    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("User", UserSchema);
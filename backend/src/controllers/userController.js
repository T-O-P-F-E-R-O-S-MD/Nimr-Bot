const User = require("../database/models/User");

async function createOrUpdateUser(data) {
    try {

        const user = await User.findOneAndUpdate(
            { jid: data.jid },
            {
                jid: data.jid,
                name: data.name,
                number: data.number,
                connected: true
            },
            {
                new: true,
                upsert: true
            }
        );

        return user;

    } catch (err) {

        console.error("User Controller Error:", err);

        return null;
    }
}

async function getUser(jid) {
    return await User.findOne({ jid });
}

async function getAllUsers() {
    return await User.find();
}

module.exports = {
    createOrUpdateUser,
    getUser,
    getAllUsers
};
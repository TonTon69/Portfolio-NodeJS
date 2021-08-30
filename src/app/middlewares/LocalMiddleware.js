const SystemInfo = require("../models/SystemInfo");
const Contact = require("../models/Contact");

module.exports = {
    systemInfoLocal: async function (req, res, next) {
        try {
            const info = await SystemInfo.find({});
            res.locals.info = info;
            next();
        } catch (error) {
            console.log(error);
        }
    },
    contactLocal: async function (req, res, next) {
        try {
            const contacts = await Contact.find({});
            res.locals.contacts = contacts;
            next();
        } catch (error) {
            console.log(error);
        }
    },
};

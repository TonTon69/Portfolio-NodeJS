const SystemInfo = require("../models/SystemInfo");

module.exports.systemInfoLocal = async function (req, res, next) {
    try {
        const info = await SystemInfo.find({});
        res.locals.info = info;
        next();
    } catch (error) {
        console.log(error);
    }
};

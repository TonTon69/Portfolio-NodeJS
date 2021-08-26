const SystemInfo = require("../models/SystemInfo");

module.exports = async function LocalMiddleware(req, res, next) {
    const info = await SystemInfo.find({});
    res.locals.info = info;
    next();
};

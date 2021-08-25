const SystemInfo = require("../models/SystemInfo");

module.exports = function LocalMiddleware(req, res, next) {
    SystemInfo.find({}).then((info) => {
        res.locals = {
            info,
        };
    });
    next();
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const SystemInfo = new Schema(
    {
        field: { type: String },
        value: { type: String },
    },
    {
        timestamps: true,
    }
);

SystemInfo.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("System-Info", SystemInfo);

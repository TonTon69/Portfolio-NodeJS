const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Award = new Schema(
    {
        name: { type: String },
        subject: { type: String },
        prize: { type: String },
        year: { type: Number },
    },
    {
        timestamps: true,
    }
);

Award.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Award", Award);

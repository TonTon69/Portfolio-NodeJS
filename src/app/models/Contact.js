const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contact = new Schema(
    {
        field: { type: String, require: true },
        value: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", Contact);

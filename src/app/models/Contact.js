const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Contact = new Schema(
    {
        field: { type: String },
        sign: { type: String },
        value: { type: String },
    },
    {
        timestamps: true,
    }
);

Contact.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Contact", Contact);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Contact = new Schema(
    {
        field: { type: String, require: true },
        sign: { type: String, require: true },
        value: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

Contact.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Contact", Contact);

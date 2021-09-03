const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Expertise = new Schema(
    {
        name: { type: String },
        image: { type: String },
        location: { type: Number },
        expertiseCategoryId: { type: Number, ref: "Expertise-Category" },
    },
    {
        timestamps: true,
    }
);

Expertise.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Expertise", Expertise);

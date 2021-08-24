const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Expertise = new Schema(
    {
        company: { type: String },
        position: { type: String },
        startYear: { type: Number },
        endYear: { type: Number },
        expertiseCategoryId: { type: ObjectId },
    },
    {
        timestamps: true,
    }
);

Expertise.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Expertise", Expertise);

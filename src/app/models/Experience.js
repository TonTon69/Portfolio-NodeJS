const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Experience = new Schema(
    {
        company: { type: String },
        position: { type: String },
        startYear: { type: Number },
        endYear: { type: Number },
    },
    {
        timestamps: true,
    }
);

Experience.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Experience", Experience);

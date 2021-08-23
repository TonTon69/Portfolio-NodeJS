const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Education = new Schema(
    {
        school: { type: String },
        degree: { type: String },
        startYear: { type: Number },
        endYear: { type: Number },
    },
    {
        timestamps: true,
    }
);

Education.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Education", Education);

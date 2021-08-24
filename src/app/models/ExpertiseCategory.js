const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ExpertiseCategory = new Schema(
    {
        _id: { type: Number },
        name: { type: String },
        description: { type: String },
        location: { type: Number },
    },
    {
        _id: false,
        timestamps: true,
    }
);

ExpertiseCategory.plugin(AutoIncrement);
ExpertiseCategory.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
});

module.exports = mongoose.model("Expertise-Category", ExpertiseCategory);

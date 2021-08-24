const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const ExpertiseCategory = new Schema(
    {
        name: { type: String },
        description: { type: String },
        location: { type: Number },
    },
    {
        timestamps: true,
    }
);

ExpertiseCategory.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
});

module.exports = mongoose.model("Expertise-Category", ExpertiseCategory);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Project = new Schema(
    {
        name: { type: String },
        banner: { type: String },
        url: { type: String },
    },
    {
        timestamps: true,
    }
);

Project.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Project", Project);

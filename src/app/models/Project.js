const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseDelete = require("mongoose-delete");

const Project = new Schema(
    {
        name: { type: String, require: true },
        banner: { type: String, require: true },
        url: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

Project.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Project", Project);

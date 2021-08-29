const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const Project = new Schema(
    {
        name: { type: String, require: true },
        banner: { type: String, require: true },
        description: { type: String },
        urlWeb: { type: String },
        urlGit: { type: String },
        location: { type: Number },
        slug: { type: String, slug: "name", unique: true },
    },
    {
        timestamps: true,
    }
);

Project.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Project", Project);

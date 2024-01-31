import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
    heading: { type: String, required: true },
    subheading: { type: String },
    description: { type: String },
    caption: { type: String },
    link: { type: String },
    code_block: { type: String, required: true },
}, {
    timestamps: true
});

export default mongoose.model("Project", ProjectSchema);
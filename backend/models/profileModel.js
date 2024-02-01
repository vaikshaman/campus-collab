import mongoose from "mongoose";


const ProfileSchema = mongoose.Schema({
    photo: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    institute: { type: String, required: true },
    branch: { type: String, required: true },
}, {
    timestamps: true
});


export default mongoose.model("Profile", ProfileSchema);
import mongoose from "mongoose";

// Define Profile Schema
const ProfileSchema = mongoose.Schema({
    photo: { type: String },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    institute: { type: String, required: true },
    course: { type: String, required: true },
    interest: { type: String, required: true },
    branch: { type: String, required: true }, 
    skills: [
        {
            skill: {
                type: String,
                required: true
            },
            level: { type: String, required: true },
            experience: { type: String, required: true },
            tools: { type: String, required: true }
        }
    ]
}, { timestamps: true });

// Export the Profile model
export default mongoose.model('Profile', ProfileSchema);

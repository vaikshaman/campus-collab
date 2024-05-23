import mongoose from 'mongoose';

const likesSchema = new mongoose.Schema({
    projectId: { type: String, required: true },
    userId: { type: String, required: true },
});

// Create a compound index on projectId and userId to enforce uniqueness
likesSchema.index({ projectId: 1, userId: 1 }, { unique: true });

const Likes = mongoose.model('Likes', likesSchema);

export default Likes;

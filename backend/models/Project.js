import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    unique: true,
    required: true,  // Add this line to enforce that projectId is required
  },
  inputFields: [
    {
      type: {
        type: String,
      },
      value: {
        type: String,
      },
    },
  ],
  image: [{
    type: String // Store the image filename
  }]
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
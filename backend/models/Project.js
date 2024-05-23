import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: {
    type: String,
  },
  inputFields: [
    {
      type: {
        type: String,
      },
      value: {
        type: mongoose.Schema.Types.Mixed, // Change the type to accept any data type
      },
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);

export default Project;

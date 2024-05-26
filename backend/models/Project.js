import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
  type: String,
  value: mongoose.Schema.Types.Mixed // Allow any type of value
});

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
  inputFields: [fieldSchema], // Array of field objects
  projectDetails: {
    projectName: String,
    category: String,
    tools: String,
    status: String,
  },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;

import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
  imageUrl: {
    type: String,
  },
  userid: {
    type: String,
    required: true,
    unique: true,
   
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  age: {
    type: Number
  },
  institute: {
    type: String
  },
  course: {
    type: String
  },
  interest: {
    type: String
  },
  branch: {
    type: String
  },
  skills: [
    {
      skill: {
        type: String,
      
      },
      level: {
        type: String,
        
      },
      experience: {
        type: String,
       
      },
      tools: {
        type: String,
       
      }
    }
  ]
}, { timestamps: true });

export default mongoose.model('Profile', ProfileSchema);

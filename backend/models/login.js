
import mongoose from 'mongoose';

const loginSchema = new mongoose.Schema({
  loginResponse: Object
  
});

export default mongoose.model('LoginData', loginSchema);
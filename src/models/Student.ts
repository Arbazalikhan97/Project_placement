import mongoose, { Schema } from 'mongoose';

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  placementStatus: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  }
});

export default mongoose.model('Student', studentSchema);
import mongoose, { Schema } from 'mongoose';

const placementSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
  status: { 
    type: String, 
    enum: ['active', 'completed', 'terminated'], 
    default: 'active' 
  }
});

export default mongoose.model('Placement', placementSchema);
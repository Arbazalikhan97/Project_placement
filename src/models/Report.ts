import mongoose, { Schema } from 'mongoose';

const reportSchema = new Schema({
  student: { 
    type: Schema.Types.ObjectId, 
    ref: 'Student', 
    required: true 
  },
  fileUrl: { 
    type: String, 
    required: true 
  },
  submissionDate: { 
    type: Date, 
    default: Date.now 
  },
  status: { 
    type: String, 
    enum: ['submitted', 'approved', 'rejected'], 
    default: 'submitted' 
  },
  feedback: String,
  tutor: { 
    type: Schema.Types.ObjectId, 
    ref: 'Tutor' 
  },
  // For Blackboard/LMS integration
  externalId: String  
}, { 
  timestamps: true 
});

export default mongoose.model('Report', reportSchema);
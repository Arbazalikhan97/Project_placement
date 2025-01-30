import mongoose, { Schema } from 'mongoose';

const placementVisitSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  tutorId: { type: Schema.Types.ObjectId, ref: 'PlacementTutor', required: true },
  visitDate: { type: Date, required: true },
  notes: { type: String },
});

export default mongoose.model('PlacementVisit', placementVisitSchema);
// src/models/User.ts
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['student', 'tutor', 'admin'], default: 'student' }
});

export default mongoose.model('User', userSchema);
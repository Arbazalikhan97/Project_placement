import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  receiverId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Message', messageSchema);
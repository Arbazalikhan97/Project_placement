// src/models/Provider.ts
import mongoose, { Schema } from 'mongoose';

const providerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // other provider fields
});

export default mongoose.model('Provider', providerSchema);
import mongoose, { Schema } from 'mongoose';

const placementProviderSchema = new Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
});

export default mongoose.model('PlacementProvider', placementProviderSchema);
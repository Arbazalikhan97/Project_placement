// src/models/AuthorizationRequest.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface AuthorizationRequestDocument extends Document {
  student: Schema.Types.ObjectId;
  provider: Schema.Types.ObjectId;
  status: string;
  providerConfirmationToken?: string;
  providerConfirmationExpires?: Date;
}

const authorizationRequestSchema = new Schema<AuthorizationRequestDocument>({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  provider: { type: Schema.Types.ObjectId, ref: 'Provider', required: true },
  status: {
    type: String,
    enum: ['draft', 'submitted', 'approved', 'rejected'],
    default: 'draft'
  },
  providerConfirmationToken: String,
  providerConfirmationExpires: Date
}, { timestamps: true });

export default mongoose.model<AuthorizationRequestDocument>(
  'AuthorizationRequest', 
  authorizationRequestSchema
);
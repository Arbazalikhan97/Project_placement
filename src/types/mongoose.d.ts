// src/types/mongoose.d.ts
import { Document, Types } from 'mongoose';

interface Provider {
  email: string;
  // other provider fields
}

interface AuthorizationRequestDocument extends Document {
  student: Types.ObjectId;
  provider: Types.ObjectId | Provider;
  status: string;
  providerConfirmationToken?: string;
  providerConfirmationExpires?: Date;
}
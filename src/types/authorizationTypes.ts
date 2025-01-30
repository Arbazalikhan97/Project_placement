// src/types/authorizationTypes.ts
import { Document, Types } from 'mongoose';

interface Provider {
  email: string;
  name: string;
}

export interface PopulatedAuthorizationRequest extends Document {
  student: Types.ObjectId;
  provider: Provider;
  status: string;
  providerConfirmationToken?: string;
  providerConfirmationExpires?: Date;
}
// src/controllers/authorizationController.ts
import { Request, Response } from 'express';
import AuthorizationRequest, { AuthorizationRequestDocument } from '../models/AuthorizationRequest';
import { sendProviderConfirmationEmail } from '../services/emailService';
import { PopulatedAuthorizationRequest } from '../types/authorizationTypes';

export const submitAuthorizationRequest = async (req: Request, res: Response) => {
  try {
    const request = await AuthorizationRequest.findByIdAndUpdate(
      req.params.id,
      { status: 'submitted' },
      { new: true }
    ).populate<{ provider: { email: string } }>('provider', 'email');

    if (!request) {
      return res.status(404).json({ message: 'Authorization request not found' });
    }

    const populatedRequest = request as unknown as PopulatedAuthorizationRequest;

    if (!populatedRequest.providerConfirmationToken) {
      return res.status(400).json({ message: 'Missing confirmation token' });
    }

    await sendProviderConfirmationEmail(
      populatedRequest.provider.email, // Now properly typed as string
      populatedRequest.providerConfirmationToken
    );

    res.json(populatedRequest);
  } catch (error) {
    console.error('Error submitting authorization:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
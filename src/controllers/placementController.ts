import type { Request, Response } from 'express';
import { submitPlacementRequest } from '../services/placementService';

// Rename the function to match the export
export const submitPlacementRequestHandler = async (req: Request, res: Response) => {
  try {
    const studentData = req.body;
    const student = await submitPlacementRequest(studentData);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting placement request' });
  }
};
import type { Request, Response } from 'express';
import PlacementTutor from '../models/PlacementTutor';

export const createPlacementTutor = async (req: Request, res: Response) => {
  try {
    const tutorData = req.body;
    const tutor = new PlacementTutor(tutorData);
    await tutor.save();
    res.status(201).json(tutor);
  } catch (error) {
    res.status(500).json({ message: 'Error creating placement tutor' });
  }
};
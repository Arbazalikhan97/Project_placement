import type { Request, Response } from 'express';
import PlacementVisit from '../models/PlacementVisit';

export const schedulePlacementVisit = async (req: Request, res: Response) => {
  try {
    const visitData = req.body;
    const visit = new PlacementVisit(visitData);
    await visit.save();
    res.status(201).json(visit);
  } catch (error) {
    res.status(500).json({ message: 'Error scheduling placement visit' });
  }
};
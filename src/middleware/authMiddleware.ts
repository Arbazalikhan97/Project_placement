import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  // ... existing implementation
};

// Add role authorization
export const authorizeTutor = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'tutor') {
    return res.status(403).json({ message: 'Tutor access required' });
  }
  next();
};
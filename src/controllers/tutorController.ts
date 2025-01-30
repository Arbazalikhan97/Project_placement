import { Request, Response } from 'express';
import Student from '../models/Student';

export const approvePlacementRequest = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { placementStatus: 'approved' },
      { new: true }
    );
    
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error approving placement request' });
  }
};
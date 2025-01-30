import { Request, Response } from 'express';
import axios from 'axios';
import Report from '../models/Report';
import { uploadToS3 } from '../services/awsService';

declare global {
  namespace Express {
    interface Request {
      user?: any;
      file?: any;
    }
  }
}

export const submitReport = async (req: Request, res: Response) => {
  try {
    const file = await uploadToS3(req.file);
    const report = new Report({
      student: req.user?.id,
      fileUrl: file.Location
    });
    await report.save();

    // Blackboard integration
    await axios.post(`${process.env.BLACKBOARD_URL}/reports`, {
      studentId: req.user?.studentId,
      reportUrl: file.Location
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting report' });
  }
};
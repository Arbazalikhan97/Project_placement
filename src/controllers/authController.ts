import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Student from '../models/Student';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Placeholder for authentication logic
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Placeholder for password validation
    const isPasswordValid = true; // Replace with actual password validation logic

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error during login.' });
  }
};
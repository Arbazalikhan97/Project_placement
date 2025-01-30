import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });
    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Registration failed'
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Login failed'
    });
  }
};
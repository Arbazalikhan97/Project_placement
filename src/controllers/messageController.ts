import { Request, Response } from 'express';
import Message from '../models/Message';

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const message = new Message({
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      content: req.body.content
    });
    
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find({
      $or: [
        { senderId: req.params.userId },
        { receiverId: req.params.userId }
      ]
    }).sort({ timestamp: 1 });
    
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages' });
  }
};
import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController';
import { authenticateUser } from '../middleware/authMiddleware';

const router = express.Router();

// Corrected routes (remove '/messages' prefix)
router.post('/', authenticateUser, sendMessage);
router.get('/:userId', authenticateUser, getMessages);

export default router;
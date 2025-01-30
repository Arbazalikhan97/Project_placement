import express from 'express';
import { approvePlacementRequest } from '../controllers/tutorController';
import { authenticateUser, authorizeTutor } from '../middleware/authMiddleware';

const router = express.Router();
router.patch('/approve/:id', authenticateUser, authorizeTutor, approvePlacementRequest);
export default router;
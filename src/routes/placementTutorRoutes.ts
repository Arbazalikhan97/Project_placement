import express from 'express';
import { createPlacementTutor } from '../controllers/placementTutorController';

const router = express.Router();

router.post('/placement-tutors', createPlacementTutor);

export default router;
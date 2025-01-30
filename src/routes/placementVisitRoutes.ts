import express from 'express';
import { schedulePlacementVisit } from '../controllers/placementVisitController';

const router = express.Router();

router.post('/placement-visits', schedulePlacementVisit);

export default router;
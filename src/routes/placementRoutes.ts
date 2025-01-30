import express from 'express';
import { submitPlacementRequestHandler } from '../controllers/placementController'; // Ensure this matches the export

const router = express.Router();

router.post('/placement-request', submitPlacementRequestHandler);

export default router;
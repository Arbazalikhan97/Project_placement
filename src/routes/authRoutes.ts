import express from 'express';
import { login } from '../controllers/authController';

const router = express.Router();

router.post('/login', login); // Ensure this matches the test path

export default router;
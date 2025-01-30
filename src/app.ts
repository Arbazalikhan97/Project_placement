import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import placementRoutes from './routes/placementRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/placements', placementRoutes); // Ensure this is correct
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Placement Management System API');
});

export default app;
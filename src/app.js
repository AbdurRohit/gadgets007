import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import gadgetRoutes from './routes/gadget.routes.js';
import { connectDB } from './config/database.js';

dotenv.config();

const app = express();
app.use(express.json());


connectDB();

app.use('/auth',authRoutes )

// Routes
app.use('/gadgets', gadgetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

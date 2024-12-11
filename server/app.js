
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';  
 
// Load environment variables
config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Make sure FRONTEND_URL is set in your .env file
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan('dev'));

// Test route
app.use('/ping', (req, res) => {
  res.send('pong');
});
 
app.use('/api/v1/user', userRoutes);
// Handle unknown routes
app.all('*', (req, res) => {
  res.status(404).send('Page not found. Please try again.');
});

app.use(errorMiddleware);

// Export the app instance
export default app;

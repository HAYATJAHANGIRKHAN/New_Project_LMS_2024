
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import morgan from 'morgan';

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

// Handle unknown routes
app.all('*', (req, res) => {
  res.status(404).send('Page not found. Please try again.');
});

// Export the app instance
export default app;

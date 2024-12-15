
// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import { config } from 'dotenv';
// import morgan from 'morgan';
// import userRoutes from './routes/user.routes.js';  
 
// // Load environment variables
// config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL], // Make sure FRONTEND_URL is set in your .env file
//     credentials: true,
//   })
// );
// app.use(cookieParser());
// app.use(morgan('dev'));

// // Test route
// app.use('/ping', (req, res) => {
//   res.send('pong');
// });
 
// app.use('/api/v1/user', userRoutes);
// // Handle unknown routes
// app.all('*', (req, res) => {
//   res.status(404).send('Page not found. Please try again.');
// });

// app.use(errorMiddleware);

// // Export the app instance
// export default app;



import cookieParser from 'cookie-parser';
config();
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

// Middlewares
// Built-In
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Third-Party
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(cookieParser());

// Server Status Check Route
app.get('/ping', (_req, res) => {
  res.send('Pong');
});

// Import all routes
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import miscRoutes from './routes/miscellaneous.routes.js';

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1', miscRoutes);

// Default catch all route - 404
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!!! 404 Page Not Found');
});

// Custom error handling middleware
app.use(errorMiddleware);

export default app;
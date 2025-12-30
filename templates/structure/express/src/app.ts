import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import { errorHandlerMiddleware } from './middlewares/errorHandler.midleware.js';


const app = express();

// Security Middlewares
app.use(helmet()); // Protect HTTP Headers
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' })); // Manage domain access
app.use(express.json({ limit: '10kb' })); // Body Parser

// Rate Limiting: Max 100 request every 15 menit for each IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too much request, wait a minute'
});
// app.use('/api/', limiter); use if you already created route

// Logging
app.use(morgan('dev'));

// Routes
// app.use('/api/v1', exampleRoutes); use if you already have route

// Middleware for Error Handling
app.use(errorHandlerMiddleware);

export default app

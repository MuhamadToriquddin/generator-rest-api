import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import routerExampleV1 from './routes/v1/example.route.js';
import errorHandlerMiddleware from './midd'



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
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

export default app

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
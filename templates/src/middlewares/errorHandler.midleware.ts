import { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/apiError.js';

export function errorHandlerMiddleware(
    err:Error | ApiError,
    req:Request,
    res:Response,
    next:NextFunction) {
  if (err instanceof ApiError) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      status: "error",
      message: err.message || "Internal Server Error",
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
  }
}

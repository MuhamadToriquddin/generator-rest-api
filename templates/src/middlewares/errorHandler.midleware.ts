import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError.js";
import { HttpStatus } from "../utils/httpStatusCode.js";
import { ZodError } from 'Zod';

export function errorHandlerMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {

  const isDev = process.env.NODE_ENV == "dev"

  // For zod validation request
  if (err instanceof ZodError){
    return res.status(400).json({
      type:"Bad request",
      message: "Request not valid",
      details: err.issues.map((issue) => `${issue.path.join('.')} : ${issue.message}`)
    })
  }

  // For custom error handler
  if (err instanceof AppError){
    return res.status(err.errorCode).json({
      type:err.type,
      message: err.message,
      details: isDev?err.stack:err.message,
    })
  }

  // For instanceof Error
  if (err instanceof Error){
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      type: "Internal server error",
      message: "Something went wrong",
      details: isDev?err.stack:"Contact administrator"
  })
  }

  // Other error
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      type: "Internal server error",
      message: "Something went wrong",
  })
}

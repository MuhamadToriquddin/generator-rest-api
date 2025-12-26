import ApiError from '../utils/ApiError.js';
import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validate = (schema:AnyZodObject) => (
  req:Request, 
  res:Response, 
  next:NextFunction) => {
  try {
    // Validate req body using schema
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!result.success) {
      // Ambil pesan error pertama dari Zod
      const errorMessage = result.error.issues
        .map((issue) => `${issue.path.join('.')} : ${issue.message}`)
        .join(', ');
        
      return next(new ApiError(400, errorMessage));
    }

    req.body = result.data.body;
    next();
  } catch (error) {
    next(error);
  }
};

export default validate;
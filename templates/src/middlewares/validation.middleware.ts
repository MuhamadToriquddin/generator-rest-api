import ApiError from '../utils/ApiError.js';
import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod/v3';

const validate = (schema:AnyZodObject) => (
  req:Request, 
  res:Response, 
  next:NextFunction) => {
  try {
    // Validate req body using schema
    const result = schema.parse({
      body: req.body,
    });
    req.body = result.data.body;
    next();
  } catch (error) {
    next(error);
  }
};

export default validate;
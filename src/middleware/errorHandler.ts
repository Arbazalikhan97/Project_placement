import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';

// Validation error handler
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((err: any) => ({
        field: err.param,
        message: err.msg
      }))
    });
  }
  next();
};

// Async error handler
export const catchAsyncErrors = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

// Global error handler
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  // Handle duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      success: false,
      error: `${field} already exists`
    });
  }

  // Handle validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val: any) => val.message);
    return res.status(400).json({
      success: false,
      error: messages
    });
  }

  res.status(500).json({
    success: false,
    error: 'Something went wrong'
  });
};
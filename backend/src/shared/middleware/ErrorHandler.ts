import {
  RequestHandler,
  ErrorRequestHandler,
} from 'express';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';
import { logger } from '@shared/utils/logger';
import { sendError } from '@shared/utils/response';
import { ERROR_MESSAGES } from '@config/constants';

/**
 * Custom application error
 */
export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public isOperational: boolean = true
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

/**
 * Global error handler middleware
 */
export const errorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  _next
) => {
  logger.error('Unhandled error', {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
  });

  // Zod validation error
  if (err instanceof ZodError) {
    const errors = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));

    return sendError(res, 'Validation failed', 400, errors);
  }

  // Prisma known errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return sendError(
        res,
        ERROR_MESSAGES.DATABASE.DUPLICATE_ENTRY,
        409
      );
    }

    if (err.code === 'P2025') {
      return sendError(
        res,
        ERROR_MESSAGES.DATABASE.NOT_FOUND,
        404
      );
    }
  }

  // Custom application errors
  if (err instanceof AppError) {
    return sendError(res, err.message, err.statusCode);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return sendError(
      res,
      ERROR_MESSAGES.AUTH.TOKEN_INVALID,
      401
    );
  }

  if (err.name === 'TokenExpiredError') {
    return sendError(
      res,
      ERROR_MESSAGES.AUTH.TOKEN_EXPIRED,
      401
    );
  }

  // Fallback
  return sendError(
    res,
    ERROR_MESSAGES.SERVER.INTERNAL_ERROR,
    500
  );
};

/**
 * 404 handler
 */
export const notFoundHandler: RequestHandler = (req, res) => {
  return sendError(
    res,
    `Route ${req.originalUrl} not found`,
    404
  );
};

/**
 * Async wrapper to catch promise errors
 */
export const asyncHandler =
  (fn: RequestHandler): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

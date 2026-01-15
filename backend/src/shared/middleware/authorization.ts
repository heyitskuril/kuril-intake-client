import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/common.types';
import { sendError } from '@shared/utils/response';
import { ERROR_MESSAGES } from '@config/constants';

export const authorize = (allowedRoles: string[]) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      return sendError(res, ERROR_MESSAGES.AUTH.UNAUTHORIZED, 401);
    }

    if (!allowedRoles.includes(req.user.role)) {
      return sendError(res, ERROR_MESSAGES.AUTH.INSUFFICIENT_PERMISSIONS, 403);
    }

    next();
  };
};
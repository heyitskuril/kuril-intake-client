import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/common.types';
import { verifyAccessToken } from '@shared/utils/jwt';
import { sendError } from '@shared/utils/response';
import { ERROR_MESSAGES } from '@config/constants';

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendError(res, ERROR_MESSAGES.AUTH.UNAUTHORIZED, 401);
    }

    const token = authHeader.substring(7);
    const decoded = verifyAccessToken(token);

    req.user = decoded;
    next();
  } catch (error) {
    return sendError(res, ERROR_MESSAGES.AUTH.TOKEN_INVALID, 401);
  }
};
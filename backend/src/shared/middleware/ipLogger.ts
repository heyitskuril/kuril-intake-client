import { Request, Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/common.types';

export const ipLogger = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  req.user = {
    ...req.user,
    ipAddress: req.ip || req.socket.remoteAddress || 'unknown',
    userAgent: req.get('user-agent') || 'unknown',
  } as any;
  next();
};
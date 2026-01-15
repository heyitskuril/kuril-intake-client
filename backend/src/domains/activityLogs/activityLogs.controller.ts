import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { ActivityLogsService } from './activityLogs.service';
import { sendSuccess } from '@shared/utils/response';
import { ActivityLogFilters } from './activityLogs.types';

export class ActivityLogsController {
  private service: ActivityLogsService;

  constructor() {
    this.service = new ActivityLogsService();
  }

  findAll = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const filters: ActivityLogFilters = {
        userId: req.query.userId as string,
        action: req.query.action as any,
        targetType: req.query.targetType as string,
        startDate: req.query.startDate ? new Date(req.query.startDate as string) : undefined,
        endDate: req.query.endDate ? new Date(req.query.endDate as string) : undefined,
        limit: req.query.limit ? Number(req.query.limit) : 50,
        offset: req.query.offset ? Number(req.query.offset) : 0,
      };

      const result = await this.service.findAll(filters);

      sendSuccess(res, {
        logs: result.logs,
        total: result.total,
        limit: filters.limit,
        offset: filters.offset,
      });
    } catch (error) {
      next(error);
    }
  };

  findRecentByUserId = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user!.id;
      const limit = req.query.limit ? Number(req.query.limit) : 10;

      const logs = await this.service.findRecentByUserId(userId, limit);

      sendSuccess(res, { logs });
    } catch (error) {
      next(error);
    }
  };
}
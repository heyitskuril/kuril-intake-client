import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { DashboardService } from './dashboard.service';
import { sendSuccess } from '@shared/utils/response';

export class DashboardController {
  private service: DashboardService;

  constructor() {
    this.service = new DashboardService();
  }

  getStats = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const stats = await this.service.getStats();
      sendSuccess(res, { stats });
    } catch (error) {
      next(error);
    }
  };
}
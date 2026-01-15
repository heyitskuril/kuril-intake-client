import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { BrandingService } from './branding.service';
import { sendSuccess } from '@shared/utils/response';
import { BrandingSettingPayload } from './branding.types';

export class BrandingController {
  private service: BrandingService;

  constructor() {
    this.service = new BrandingService();
  }

  upsert = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: BrandingSettingPayload = req.body;
      const userId = req.user!.id;
      const setting = await this.service.upsert(data, userId);
      sendSuccess(res, { setting }, 'Branding setting updated successfully');
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const category = req.query.category as string;
      const settings = await this.service.findAll({ category });
      sendSuccess(res, { settings });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { key } = req.params;
      const userId = req.user!.id;
      await this.service.delete(key, userId);
      sendSuccess(res, null, 'Branding setting deleted successfully');
    } catch (error) {
      next(error);
    }
  };
}
import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { AnnouncementsService } from './announcements.service';
import { sendSuccess, sendCreated } from '@shared/utils/response';
import { CreateAnnouncementPayload, UpdateAnnouncementPayload } from './announcements.types';

export class AnnouncementsController {
  private service: AnnouncementsService;

  constructor() {
    this.service = new AnnouncementsService();
  }

  create = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: CreateAnnouncementPayload = req.body;
      const userId = req.user!.id;
      const announcement = await this.service.create(data, userId);
      sendCreated(res, { announcement }, 'Announcement created successfully');
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const announcement = await this.service.findById(id);
      sendSuccess(res, { announcement });
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const announcements = await this.service.findAll();
      sendSuccess(res, { announcements });
    } catch (error) {
      next(error);
    }
  };

  findActive = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const announcements = await this.service.findActive();
      sendSuccess(res, { announcements });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const data: UpdateAnnouncementPayload = req.body;
      const userId = req.user!.id;
      const announcement = await this.service.update(id, data, userId);
      sendSuccess(res, { announcement }, 'Announcement updated successfully');
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.id;
      await this.service.delete(id, userId);
      sendSuccess(res, null, 'Announcement deleted successfully');
    } catch (error) {
      next(error);
    }
  };
}
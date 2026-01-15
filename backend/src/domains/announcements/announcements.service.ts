import { AnnouncementsRepository } from './announcements.repository';
import { ActivityLogsService } from '@domains/activityLogs/activityLogs.service';
import { AppError } from '@shared/middleware/ErrorHandler';
import { ERROR_MESSAGES } from '@config/constants';
import { CreateAnnouncementPayload, UpdateAnnouncementPayload } from './announcements.types';
import { Announcement } from '@prisma/client';

export class AnnouncementsService {
  private repository: AnnouncementsRepository;
  private activityLogsService: ActivityLogsService;

  constructor() {
    this.repository = new AnnouncementsRepository();
    this.activityLogsService = new ActivityLogsService();
  }

  async create(data: CreateAnnouncementPayload, userId: string): Promise<Announcement> {
    const announcement = await this.repository.create(data);

    await this.activityLogsService.log({
      userId,
      action: 'announcement_created',
      targetType: 'announcement',
      targetId: announcement.id,
      metadata: { title: announcement.title },
    });

    return announcement;
  }

  async findById(id: string): Promise<Announcement> {
    const announcement = await this.repository.findById(id);
    if (!announcement) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }
    return announcement;
  }

  async findAll(): Promise<Announcement[]> {
    return this.repository.findAll();
  }

  async findActive(): Promise<Announcement[]> {
    return this.repository.findActive();
  }

  async update(id: string, data: UpdateAnnouncementPayload, userId: string): Promise<Announcement> {
    const existingAnnouncement = await this.repository.findById(id);
    if (!existingAnnouncement) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    const announcement = await this.repository.update(id, data);

    await this.activityLogsService.log({
      userId,
      action: 'announcement_updated',
      targetType: 'announcement',
      targetId: announcement.id,
      metadata: { changes: data },
    });

    return announcement;
  }

  async delete(id: string, userId: string): Promise<void> {
    const announcement = await this.repository.findById(id);
    if (!announcement) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    await this.repository.delete(id);

    await this.activityLogsService.log({
      userId,
      action: 'announcement_updated',
      targetType: 'announcement',
      targetId: id,
      metadata: { title: announcement.title, deleted: true },
    });
  }
}
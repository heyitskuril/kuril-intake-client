import { ActivityLogsRepository } from './activityLogs.repository';
import { LogActivityPayload, ActivityLogFilters } from './activityLogs.types';
import { logger } from '@shared/utils/logger';

export class ActivityLogsService {
  private repository: ActivityLogsRepository;

  constructor() {
    this.repository = new ActivityLogsRepository();
  }

  async log(data: LogActivityPayload): Promise<void> {
    try {
      await this.repository.create(data);
      logger.info('Activity logged:', data);
    } catch (error) {
      logger.error('Failed to log activity:', error);
      // Don't throw error, logging failure shouldn't break the main flow
    }
  }

  async findAll(filters: ActivityLogFilters) {
    return this.repository.findAll(filters);
  }

  async findRecentByUserId(userId: string, limit?: number) {
    return this.repository.findRecentByUserId(userId, limit);
  }
}
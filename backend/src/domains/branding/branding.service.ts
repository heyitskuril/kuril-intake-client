import { BrandingRepository } from './branding.repository';
import { ActivityLogsService } from '@domains/activityLogs/activityLogs.service';
import { BrandingSettingPayload, BrandingFilters } from './branding.types';
import { BrandingSetting } from '@prisma/client';

export class BrandingService {
  private repository: BrandingRepository;
  private activityLogsService: ActivityLogsService;

  constructor() {
    this.repository = new BrandingRepository();
    this.activityLogsService = new ActivityLogsService();
  }

  async upsert(data: BrandingSettingPayload, userId: string): Promise<BrandingSetting> {
    const setting = await this.repository.upsert(data);

    await this.activityLogsService.log({
      userId,
      action: 'branding_updated',
      targetType: 'branding_setting',
      targetId: setting.id,
      metadata: { key: setting.key, value: setting.value },
    });

    return setting;
  }

  async findAll(filters?: BrandingFilters): Promise<BrandingSetting[]> {
    return this.repository.findAll(filters);
  }

  async delete(key: string, userId: string): Promise<void> {
    await this.repository.delete(key);

    await this.activityLogsService.log({
      userId,
      action: 'branding_updated',
      targetType: 'branding_setting',
      metadata: { key, deleted: true },
    });
  }
}
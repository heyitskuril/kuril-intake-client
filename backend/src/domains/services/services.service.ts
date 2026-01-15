import { ServicesRepository } from './services.repository';
import { ActivityLogsService } from '@domains/activityLogs/activityLogs.service';
import { AppError } from '@shared/middleware/ErrorHandler';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@config/constants';
import { CreateServicePayload, UpdateServicePayload } from './services.types';
import { Service } from '@prisma/client';

export class ServicesService {
  private repository: ServicesRepository;
  private activityLogsService: ActivityLogsService;

  constructor() {
    this.repository = new ServicesRepository();
    this.activityLogsService = new ActivityLogsService();
  }

  async create(data: CreateServicePayload, userId: string): Promise<Service> {
    // Check if slug already exists
    const existingService = await this.repository.findBySlug(data.slug);
    if (existingService) {
      throw new AppError(409, 'Service with this slug already exists');
    }

    const service = await this.repository.create(data);

    await this.activityLogsService.log({
      userId,
      action: 'service_created',
      targetType: 'service',
      targetId: service.id,
      metadata: { serviceName: service.name },
    });

    return service;
  }

  async findById(id: string): Promise<Service> {
    const service = await this.repository.findById(id);

    if (!service) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    return service;
  }

  async findAll(): Promise<Service[]> {
    return this.repository.findAll();
  }

  async findActive(): Promise<Service[]> {
    return this.repository.findActive();
  }

  async update(id: string, data: UpdateServicePayload, userId: string): Promise<Service> {
    const existingService = await this.repository.findById(id);

    if (!existingService) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    // Check slug uniqueness if updating slug
    if (data.slug && data.slug !== existingService.slug) {
      const serviceWithSlug = await this.repository.findBySlug(data.slug);
      if (serviceWithSlug) {
        throw new AppError(409, 'Service with this slug already exists');
      }
    }

    const service = await this.repository.update(id, data);

    await this.activityLogsService.log({
      userId,
      action: 'service_updated',
      targetType: 'service',
      targetId: service.id,
      metadata: { changes: data },
    });

    return service;
  }

  async delete(id: string, userId: string): Promise<void> {
    const service = await this.repository.findById(id);

    if (!service) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    await this.repository.delete(id);

    await this.activityLogsService.log({
      userId,
      action: 'service_deleted',
      targetType: 'service',
      targetId: id,
      metadata: { serviceName: service.name },
    });
  }
}
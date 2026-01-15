import { ClientsRepository } from './clients.repository';
import { ActivityLogsService } from '@domains/activityLogs/activityLogs.service';
import { AppError } from '@shared/middleware/ErrorHandler';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@config/constants';
import { CreateClientPayload, UpdateClientPayload, ClientFilters } from './clients.types';
import { Client } from '@prisma/client';

export class ClientsService {
  private repository: ClientsRepository;
  private activityLogsService: ActivityLogsService;

  constructor() {
    this.repository = new ClientsRepository();
    this.activityLogsService = new ActivityLogsService();
  }

  async create(data: CreateClientPayload, userId?: string): Promise<Client> {
    const client = await this.repository.create(data);

    if (userId) {
      await this.activityLogsService.log({
        userId,
        action: 'client_created',
        targetType: 'client',
        targetId: client.id,
        metadata: { clientEmail: client.email },
      });
    }

    return client;
  }

  async findById(id: string): Promise<Client> {
    const client = await this.repository.findById(id);

    if (!client) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    return client;
  }

  async findAll(filters: ClientFilters) {
    return this.repository.findAll(filters);
  }

  async update(id: string, data: UpdateClientPayload, userId: string): Promise<Client> {
    const existingClient = await this.repository.findById(id);

    if (!existingClient) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    const client = await this.repository.update(id, data);

    const action = data.status && data.status !== existingClient.status 
      ? 'status_changed' 
      : 'client_updated';

    await this.activityLogsService.log({
      userId,
      action,
      targetType: 'client',
      targetId: client.id,
      metadata: {
        changes: data,
        ...(data.status && { oldStatus: existingClient.status, newStatus: data.status }),
      },
    });

    return client;
  }

  async delete(id: string, userId: string): Promise<void> {
    const client = await this.repository.findById(id);

    if (!client) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    await this.repository.delete(id);

    await this.activityLogsService.log({
      userId,
      action: 'client_updated',
      targetType: 'client',
      targetId: id,
      metadata: { clientEmail: client.email, deleted: true },
    });
  }

  async getStatsByStatus() {
    return this.repository.countByStatus();
  }
}
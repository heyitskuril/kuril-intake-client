import { UsersRepository } from './users.repository';
import { ActivityLogsService } from '@domains/activityLogs/activityLogs.service';
import { hashPassword } from '@shared/utils/hash';
import { AppError } from '@shared/middleware/ErrorHandler';
import { ERROR_MESSAGES } from '@config/constants';
import { CreateUserPayload, UpdateUserPayload, UserFilters } from './users.types';
import { User } from '@prisma/client';

export class UsersService {
  private repository: UsersRepository;
  private activityLogsService: ActivityLogsService;

  constructor() {
    this.repository = new UsersRepository();
    this.activityLogsService = new ActivityLogsService();
  }

  async create(data: CreateUserPayload, adminUserId: string): Promise<User> {
    const existingUser = await this.repository.findByEmail(data.email);
    if (existingUser) {
      throw new AppError(409, 'User with this email already exists');
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await this.repository.create({
      ...data,
      password: hashedPassword,
    });

    await this.activityLogsService.log({
      userId: adminUserId,
      action: 'user_created',
      targetType: 'user',
      targetId: user.id,
      metadata: { userEmail: user.email },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    return user;
  }

  async findAll(filters: UserFilters) {
    return this.repository.findAll(filters);
  }

  async update(id: string, data: UpdateUserPayload, adminUserId: string): Promise<User> {
    const existingUser = await this.repository.findById(id);

    if (!existingUser) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    if (data.email && data.email !== existingUser.email) {
      const userWithEmail = await this.repository.findByEmail(data.email);
      if (userWithEmail) {
        throw new AppError(409, 'User with this email already exists');
      }
    }

    const updateData = { ...data };
    if (data.password) {
      updateData.password = await hashPassword(data.password);
    }

    const user = await this.repository.update(id, updateData);

    await this.activityLogsService.log({
      userId: adminUserId,
      action: 'user_updated',
      targetType: 'user',
      targetId: user.id,
      metadata: { changes: data },
    });

    return user;
  }

  async delete(id: string, adminUserId: string): Promise<void> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    if (user.id === adminUserId) {
      throw new AppError(400, 'Cannot delete your own account');
    }

    await this.repository.delete(id);

    await this.activityLogsService.log({
      userId: adminUserId,
      action: 'user_deleted',
      targetType: 'user',
      targetId: id,
      metadata: { userEmail: user.email },
    });
  }
}
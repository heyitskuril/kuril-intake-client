import { prisma } from '@config/database';
import { ActivityLog } from '@prisma/client';
import { LogActivityPayload, ActivityLogFilters } from './activityLogs.types';

export class ActivityLogsRepository {
  async create(data: LogActivityPayload): Promise<ActivityLog> {
    return prisma.activityLog.create({
      data,
    });
  }

  async findAll(filters: ActivityLogFilters): Promise<{ logs: ActivityLog[]; total: number }> {
    const { userId, action, targetType, startDate, endDate, limit = 50, offset = 0 } = filters;

    const where: any = {};

    if (userId) where.user_id = userId;
    if (action) where.action = action;
    if (targetType) where.target_type = targetType;

    if (startDate || endDate) {
      where.created_at = {};
      if (startDate) where.created_at.gte = startDate;
      if (endDate) where.created_at.lte = endDate;
    }

    const [logs, total] = await Promise.all([
      prisma.activityLog.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.activityLog.count({ where }),
    ]);

    return { logs, total };
  }

  async findRecentByUserId(userId: string, limit: number = 10): Promise<ActivityLog[]> {
    return prisma.activityLog.findMany({
      where: { user_id: userId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
      take: limit,
    });
  }
}
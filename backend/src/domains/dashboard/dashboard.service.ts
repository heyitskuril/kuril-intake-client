import { prisma } from '@config/database';
import { DashboardStats } from './dashboard.types';

export class DashboardService {
  async getStats(): Promise<DashboardStats> {
    const [
      totalClients,
      newClients,
      inProgressClients,
      completedClients,
      clientsByStatus,
      recentClients,
      recentActivities,
    ] = await Promise.all([
      prisma.client.count(),
      prisma.client.count({ where: { status: 'new' } }),
      prisma.client.count({ where: { status: 'in_progress' } }),
      prisma.client.count({ where: { status: 'completed' } }),
      prisma.client.groupBy({
        by: ['status'],
        _count: true,
      }),
      prisma.client.findMany({
        take: 5,
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          name: true,
          email: true,
          status: true,
          service_type: true,
          created_at: true,
        },
      }),
      prisma.activityLog.findMany({
        take: 10,
        orderBy: { created_at: 'desc' },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      }),
    ]);

    const statusMap: Record<string, number> = {};
    clientsByStatus.forEach((item) => {
      statusMap[item.status] = item._count;
    });

    return {
      totalClients,
      newClients,
      inProgressClients,
      completedClients,
      clientsByStatus: statusMap,
      recentClients,
      recentActivities,
    };
  }
}
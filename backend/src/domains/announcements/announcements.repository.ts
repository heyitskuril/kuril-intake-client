import { prisma } from '@config/database';
import { Announcement } from '@prisma/client';
import { CreateAnnouncementPayload, UpdateAnnouncementPayload } from './announcements.types';

export class AnnouncementsRepository {
  async create(data: CreateAnnouncementPayload): Promise<Announcement> {
    return prisma.announcement.create({ data });
  }

  async findById(id: string): Promise<Announcement | null> {
    return prisma.announcement.findUnique({ where: { id } });
  }

  async findAll(): Promise<Announcement[]> {
    return prisma.announcement.findMany({
      orderBy: [{ priority: 'desc' }, { created_at: 'desc' }],
    });
  }

  async findActive(): Promise<Announcement[]> {
    const now = new Date();
    return prisma.announcement.findMany({
      where: {
        is_active: true,
        OR: [
          { start_date: null, end_date: null },
          { start_date: { lte: now }, end_date: null },
          { start_date: null, end_date: { gte: now } },
          { start_date: { lte: now }, end_date: { gte: now } },
        ],
      },
      orderBy: [{ priority: 'desc' }, { created_at: 'desc' }],
    });
  }

  async update(id: string, data: UpdateAnnouncementPayload): Promise<Announcement> {
    return prisma.announcement.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Announcement> {
    return prisma.announcement.delete({ where: { id } });
  }
}
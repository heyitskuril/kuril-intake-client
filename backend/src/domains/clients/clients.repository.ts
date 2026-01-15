import { prisma } from '@config/database';
import { Client, ClientStatus } from '@prisma/client';
import { CreateClientPayload, UpdateClientPayload, ClientFilters } from './clients.types';

export class ClientsRepository {
  async create(data: CreateClientPayload): Promise<Client> {
    return prisma.client.create({
      data: {
        ...data,
        status: 'new',
      },
    });
  }

  async findById(id: string): Promise<Client | null> {
    return prisma.client.findUnique({
      where: { id },
      include: {
        internal_notes: {
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
        },
      },
    });
  }

  async findAll(filters: ClientFilters): Promise<{ clients: Client[]; total: number }> {
    const { status, search, service_type, startDate, endDate, limit = 50, offset = 0 } = filters;

    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (service_type) {
      where.service_type = service_type;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { business_type: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (startDate || endDate) {
      where.created_at = {};
      if (startDate) where.created_at.gte = startDate;
      if (endDate) where.created_at.lte = endDate;
    }

    const [clients, total] = await Promise.all([
      prisma.client.findMany({
        where,
        include: {
          internal_notes: {
            take: 3,
            orderBy: { created_at: 'desc' },
          },
        },
        orderBy: { created_at: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.client.count({ where }),
    ]);

    return { clients, total };
  }

  async update(id: string, data: UpdateClientPayload): Promise<Client> {
    return prisma.client.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Client> {
    return prisma.client.delete({
      where: { id },
    });
  }

  async countByStatus(): Promise<Record<ClientStatus, number>> {
    const counts = await prisma.client.groupBy({
      by: ['status'],
      _count: true,
    });

    const result: any = {
      new: 0,
      in_progress: 0,
      completed: 0,
      rejected: 0,
      archived: 0,
    };

    counts.forEach((item) => {
      result[item.status] = item._count;
    });

    return result;
  }
}
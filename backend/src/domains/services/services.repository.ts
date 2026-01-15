import { prisma } from '@config/database';
import { Service } from '@prisma/client';
import { CreateServicePayload, UpdateServicePayload } from './services.types';

export class ServicesRepository {
  async create(data: CreateServicePayload): Promise<Service> {
    return prisma.service.create({
      data,
    });
  }

  async findById(id: string): Promise<Service | null> {
    return prisma.service.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug: string): Promise<Service | null> {
    return prisma.service.findUnique({
      where: { slug },
    });
  }

  async findAll(): Promise<Service[]> {
    return prisma.service.findMany({
      orderBy: { display_order: 'asc' },
    });
  }

  async findActive(): Promise<Service[]> {
    return prisma.service.findMany({
      where: { is_active: true },
      orderBy: { display_order: 'asc' },
    });
  }

  async update(id: string, data: UpdateServicePayload): Promise<Service> {
    return prisma.service.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Service> {
    return prisma.service.delete({
      where: { id },
    });
  }
}
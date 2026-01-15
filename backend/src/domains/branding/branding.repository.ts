import { prisma } from '@config/database';
import { BrandingSetting } from '@prisma/client';
import { BrandingSettingPayload, BrandingFilters } from './branding.types';

export class BrandingRepository {
  async upsert(data: BrandingSettingPayload): Promise<BrandingSetting> {
    return prisma.brandingSetting.upsert({
      where: { key: data.key },
      update: {
        value: data.value,
        category: data.category,
        description: data.description,
      },
      create: data,
    });
  }

  async findByKey(key: string): Promise<BrandingSetting | null> {
    return prisma.brandingSetting.findUnique({ where: { key } });
  }

  async findAll(filters?: BrandingFilters): Promise<BrandingSetting[]> {
    const where: any = {};
    if (filters?.category) {
      where.category = filters.category;
    }

    return prisma.brandingSetting.findMany({ where });
  }

  async delete(key: string): Promise<BrandingSetting> {
    return prisma.brandingSetting.delete({ where: { key } });
  }
}
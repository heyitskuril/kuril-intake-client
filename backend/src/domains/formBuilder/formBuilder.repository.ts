import { prisma } from '@config/database';
import { FormField } from '@prisma/client';
import { CreateFormFieldPayload, UpdateFormFieldPayload } from './formBuilder.types';

export class FormBuilderRepository {
  async create(data: CreateFormFieldPayload): Promise<FormField> {
    return prisma.formField.create({ data });
  }

  async findById(id: string): Promise<FormField | null> {
    return prisma.formField.findUnique({ where: { id } });
  }

  async findAll(): Promise<FormField[]> {
    return prisma.formField.findMany({
      orderBy: { display_order: 'asc' },
    });
  }

  async findActive(): Promise<FormField[]> {
    return prisma.formField.findMany({
      where: { is_active: true },
      orderBy: { display_order: 'asc' },
    });
  }

  async update(id: string, data: UpdateFormFieldPayload): Promise<FormField> {
    return prisma.formField.update({ where: { id }, data });
  }

  async delete(id: string): Promise<FormField> {
    return prisma.formField.delete({ where: { id } });
  }
}
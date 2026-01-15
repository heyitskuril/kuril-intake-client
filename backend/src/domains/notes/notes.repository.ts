import { prisma } from '@config/database';
import { InternalNote } from '@prisma/client';
import { CreateNotePayload, UpdateNotePayload } from './notes.types';

export class NotesRepository {
  async create(data: CreateNotePayload, userId: string): Promise<InternalNote> {
    return prisma.internalNote.create({
      data: {
        ...data,
        user_id: userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findById(id: string): Promise<InternalNote | null> {
    return prisma.internalNote.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findByClientId(clientId: string): Promise<InternalNote[]> {
    return prisma.internalNote.findMany({
      where: { client_id: clientId },
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
    });
  }

  async update(id: string, data: UpdateNotePayload): Promise<InternalNote> {
    return prisma.internalNote.update({
      where: { id },
      data,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async delete(id: string): Promise<InternalNote> {
    return prisma.internalNote.delete({
      where: { id },
    });
  }
}
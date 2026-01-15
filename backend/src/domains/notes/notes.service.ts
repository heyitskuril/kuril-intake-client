import { NotesRepository } from './notes.repository';
import { ActivityLogsService } from '@domains/activityLogs/activityLogs.service';
import { AppError } from '@shared/middleware/ErrorHandler';
import { ERROR_MESSAGES } from '@config/constants';
import { CreateNotePayload, UpdateNotePayload } from './notes.types';
import { InternalNote } from '@prisma/client';

export class NotesService {
  private repository: NotesRepository;
  private activityLogsService: ActivityLogsService;

  constructor() {
    this.repository = new NotesRepository();
    this.activityLogsService = new ActivityLogsService();
  }

  async create(data: CreateNotePayload, userId: string): Promise<InternalNote> {
    const note = await this.repository.create(data, userId);

    await this.activityLogsService.log({
      userId,
      action: 'note_added',
      targetType: 'note',
      targetId: note.id,
      metadata: { clientId: data.client_id },
    });

    return note;
  }

  async findById(id: string): Promise<InternalNote> {
    const note = await this.repository.findById(id);

    if (!note) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    return note;
  }

  async findByClientId(clientId: string): Promise<InternalNote[]> {
    return this.repository.findByClientId(clientId);
  }

  async update(id: string, data: UpdateNotePayload, userId: string): Promise<InternalNote> {
    const existingNote = await this.repository.findById(id);

    if (!existingNote) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    const note = await this.repository.update(id, data);

    await this.activityLogsService.log({
      userId,
      action: 'note_updated',
      targetType: 'note',
      targetId: note.id,
      metadata: { clientId: note.client_id },
    });

    return note;
  }

  async delete(id: string, userId: string): Promise<void> {
    const note = await this.repository.findById(id);

    if (!note) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    await this.repository.delete(id);

    await this.activityLogsService.log({
      userId,
      action: 'note_deleted',
      targetType: 'note',
      targetId: id,
      metadata: { clientId: note.client_id },
    });
  }
}
import { FormBuilderRepository } from './formBuilder.repository';
import { ActivityLogsService } from '@domains/activityLogs/activityLogs.service';
import { AppError } from '@shared/middleware/ErrorHandler';
import { ERROR_MESSAGES } from '@config/constants';
import { CreateFormFieldPayload, UpdateFormFieldPayload } from './formBuilder.types';
import { FormField } from '@prisma/client';

export class FormBuilderService {
  private repository: FormBuilderRepository;
  private activityLogsService: ActivityLogsService;

  constructor() {
    this.repository = new FormBuilderRepository();
    this.activityLogsService = new ActivityLogsService();
  }

  async create(data: CreateFormFieldPayload, userId: string): Promise<FormField> {
    const field = await this.repository.create(data);

    await this.activityLogsService.log({
      userId,
      action: 'form_field_created',
      targetType: 'form_field',
      targetId: field.id,
      metadata: { fieldName: field.field_name },
    });

    return field;
  }

  async findById(id: string): Promise<FormField> {
    const field = await this.repository.findById(id);
    if (!field) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }
    return field;
  }

  async findAll(): Promise<FormField[]> {
    return this.repository.findAll();
  }

  async findActive(): Promise<FormField[]> {
    return this.repository.findActive();
  }

  async update(id: string, data: UpdateFormFieldPayload, userId: string): Promise<FormField> {
    const existingField = await this.repository.findById(id);
    if (!existingField) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    const field = await this.repository.update(id, data);

    await this.activityLogsService.log({
      userId,
      action: 'form_field_updated',
      targetType: 'form_field',
      targetId: field.id,
      metadata: { changes: data },
    });

    return field;
  }

  async delete(id: string, userId: string): Promise<void> {
    const field = await this.repository.findById(id);
    if (!field) {
      throw new AppError(404, ERROR_MESSAGES.DATABASE.NOT_FOUND);
    }

    await this.repository.delete(id);

    await this.activityLogsService.log({
      userId,
      action: 'form_field_deleted',
      targetType: 'form_field',
      targetId: id,
      metadata: { fieldName: field.field_name },
    });
  }
}
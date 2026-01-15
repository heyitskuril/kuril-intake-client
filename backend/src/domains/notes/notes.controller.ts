import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { NotesService } from './notes.service';
import { sendSuccess, sendCreated } from '@shared/utils/response';
import { SUCCESS_MESSAGES } from '@config/constants';
import { CreateNotePayload, UpdateNotePayload } from './notes.types';

export class NotesController {
  private service: NotesService;

  constructor() {
    this.service = new NotesService();
  }

  create = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: CreateNotePayload = req.body;
      const userId = req.user!.id;

      const note = await this.service.create(data, userId);

      sendCreated(res, { note }, SUCCESS_MESSAGES.NOTE.CREATED);
    } catch (error) {
      next(error);
    }
  };

  findById = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;

      const note = await this.service.findById(id);

      sendSuccess(res, { note });
    } catch (error) {
      next(error);
    }
  };

  findByClientId = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { clientId } = req.params;

      const notes = await this.service.findByClientId(clientId);

      sendSuccess(res, { notes });
    } catch (error) {
      next(error);
    }
  };

  update = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const data: UpdateNotePayload = req.body;
      const userId = req.user!.id;

      const note = await this.service.update(id, data, userId);

      sendSuccess(res, { note }, SUCCESS_MESSAGES.NOTE.UPDATED);
    } catch (error) {
      next(error);
    }
  };

  delete = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.id;

      await this.service.delete(id, userId);

      sendSuccess(res, null, SUCCESS_MESSAGES.NOTE.DELETED);
    } catch (error) {
      next(error);
    }
  };
}
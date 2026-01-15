import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { FormBuilderService } from './formBuilder.service';
import { sendSuccess, sendCreated } from '@shared/utils/response';
import { CreateFormFieldPayload, UpdateFormFieldPayload } from './formBuilder.types';

export class FormBuilderController {
  private service: FormBuilderService;

  constructor() {
    this.service = new FormBuilderService();
  }

  create = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: CreateFormFieldPayload = req.body;
      const userId = req.user!.id;
      const field = await this.service.create(data, userId);
      sendCreated(res, { field }, 'Form field created successfully');
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const field = await this.service.findById(id);
      sendSuccess(res, { field });
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const fields = await this.service.findAll();
      sendSuccess(res, { fields });
    } catch (error) {
      next(error);
    }
  };

  findActive = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const fields = await this.service.findActive();
      sendSuccess(res, { fields });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const data: UpdateFormFieldPayload = req.body;
      const userId = req.user!.id;
      const field = await this.service.update(id, data, userId);
      sendSuccess(res, { field }, 'Form field updated successfully');
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = req.user!.id;
      await this.service.delete(id, userId);
      sendSuccess(res, null, 'Form field deleted successfully');
    } catch (error) {
      next(error);
    }
  };
}
import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { ServicesService } from './services.service';
import { sendSuccess, sendCreated } from '@shared/utils/response';
import { SUCCESS_MESSAGES } from '@config/constants';
import { CreateServicePayload, UpdateServicePayload } from './services.types';

export class ServicesController {
  private service: ServicesService;

  constructor() {
    this.service = new ServicesService();
  }

  create = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: CreateServicePayload = req.body;
      const userId = req.user!.id;

      const serviceData = await this.service.create(data, userId);

      sendCreated(res, { service: serviceData }, SUCCESS_MESSAGES.SERVICE.CREATED);
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

      const serviceData = await this.service.findById(id);

      sendSuccess(res, { service: serviceData });
    } catch (error) {
      next(error);
    }
  };

  findAll = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const services = await this.service.findAll();

      sendSuccess(res, { services });
    } catch (error) {
      next(error);
    }
  };

  findActive = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const services = await this.service.findActive();

      sendSuccess(res, { services });
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
      const data: UpdateServicePayload = req.body;
      const userId = req.user!.id;

      const serviceData = await this.service.update(id, data, userId);

      sendSuccess(res, { service: serviceData }, SUCCESS_MESSAGES.SERVICE.UPDATED);
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

      sendSuccess(res, null, SUCCESS_MESSAGES.SERVICE.DELETED);
    } catch (error) {
      next(error);
    }
  };
}
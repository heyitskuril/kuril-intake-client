import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { ClientsService } from './clients.service';
import { sendSuccess, sendCreated } from '@shared/utils/response';
import { SUCCESS_MESSAGES } from '@config/constants';
import { CreateClientPayload, UpdateClientPayload, ClientFilters } from './clients.types';

export class ClientsController {
  private service: ClientsService;

  constructor() {
    this.service = new ClientsService();
  }

  create = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: CreateClientPayload = req.body;
      const userId = req.user?.id;

      const client = await this.service.create(data, userId);

      sendCreated(res, { client }, SUCCESS_MESSAGES.CLIENT.CREATED);
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

      const client = await this.service.findById(id);

      sendSuccess(res, { client });
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
      const filters: ClientFilters = {
        status: req.query.status as any,
        search: req.query.search as string,
        service_type: req.query.service_type as string,
        startDate: req.query.startDate ? new Date(req.query.startDate as string) : undefined,
        endDate: req.query.endDate ? new Date(req.query.endDate as string) : undefined,
        limit: req.query.limit ? Number(req.query.limit) : 50,
        offset: req.query.offset ? Number(req.query.offset) : 0,
      };

      const result = await this.service.findAll(filters);

      sendSuccess(res, {
        clients: result.clients,
        total: result.total,
        limit: filters.limit,
        offset: filters.offset,
      });
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
      const data: UpdateClientPayload = req.body;
      const userId = req.user!.id;

      const client = await this.service.update(id, data, userId);

      sendSuccess(res, { client }, SUCCESS_MESSAGES.CLIENT.UPDATED);
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

      sendSuccess(res, null, SUCCESS_MESSAGES.CLIENT.DELETED);
    } catch (error) {
      next(error);
    }
  };

  // Public endpoint for form submission
  submitIntake = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: CreateClientPayload = req.body;

      const client = await this.service.create(data);

      sendCreated(res, { client }, SUCCESS_MESSAGES.CLIENT.SUBMISSION_RECEIVED);
    } catch (error) {
      next(error);
    }
  };
}
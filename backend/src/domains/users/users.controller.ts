import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { UsersService } from './users.service';
import { sendSuccess, sendCreated } from '@shared/utils/response';
import { SUCCESS_MESSAGES } from '@config/constants';
import { CreateUserPayload, UpdateUserPayload, UserFilters } from './users.types';

export class UsersController {
  private service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  create = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: CreateUserPayload = req.body;
      const adminUserId = req.user!.id;

      const user = await this.service.create(data, adminUserId);

      sendCreated(res, { user }, 'User created successfully');
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

      const user = await this.service.findById(id);

      sendSuccess(res, { user });
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
      const filters: UserFilters = {
        role: req.query.role as string,
        search: req.query.search as string,
        limit: req.query.limit ? Number(req.query.limit) : 50,
        offset: req.query.offset ? Number(req.query.offset) : 0,
      };

      const result = await this.service.findAll(filters);

      sendSuccess(res, {
        users: result.users,
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
      const data: UpdateUserPayload = req.body;
      const adminUserId = req.user!.id;

      const user = await this.service.update(id, data, adminUserId);

      sendSuccess(res, { user }, 'User updated successfully');
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
      const adminUserId = req.user!.id;

      await this.service.delete(id, adminUserId);

      sendSuccess(res, null, 'User deleted successfully');
    } catch (error) {
      next(error);
    }
  };
}
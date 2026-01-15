import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@shared/types/CommonTypes';
import { AuthService } from './auth.service';
import { sendSuccess, sendCreated } from '@shared/utils/response';
import { SUCCESS_MESSAGES } from '@config/constants';
import { LoginPayload, RegisterPayload, RefreshTokenPayload } from './auth.types';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  register = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: RegisterPayload = req.body;
      const adminUserId = req.user!.id;

      const result = await this.authService.register(data, adminUserId);

      sendCreated(res, { user: result.user }, SUCCESS_MESSAGES.AUTH.REGISTER_SUCCESS);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: LoginPayload = req.body;
      const ipAddress = req.ip || req.socket.remoteAddress;
      const userAgent = req.get('user-agent');

      const result = await this.authService.login(data, ipAddress, userAgent);

      sendSuccess(res, result, SUCCESS_MESSAGES.AUTH.LOGIN_SUCCESS);
    } catch (error) {
      next(error);
    }
  };

  refreshToken = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { refreshToken }: RefreshTokenPayload = req.body;

      const result = await this.authService.refreshToken(refreshToken);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  };

  logout = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user!.id;

      await this.authService.logout(userId);

      sendSuccess(res, null, SUCCESS_MESSAGES.AUTH.LOGOUT_SUCCESS);
    } catch (error) {
      next(error);
    }
  };

  me = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      sendSuccess(res, { user: req.user });
    } catch (error) {
      next(error);
    }
  };
}
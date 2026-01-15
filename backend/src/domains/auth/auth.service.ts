import { prisma } from '@config/database';
import { hashPassword, comparePassword } from '@shared/utils/hash';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '@shared/utils/jwt';
import { AppError } from '@shared/middleware/ErrorHandler';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@config/constants';
import { LoginPayload, RegisterPayload, AuthResponse } from './auth.types';
import { ActivityLogsService } from '@domains/activityLogs/activityLogs.service';
import { UserRole } from '@/shared/types/enums';

export class AuthService {
  private activityLogsService: ActivityLogsService;

  constructor() {
    this.activityLogsService = new ActivityLogsService();
  }

  async register(data: RegisterPayload, adminUserId: string): Promise<AuthResponse> {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new AppError(409, ERROR_MESSAGES.DATABASE.DUPLICATE_ENTRY);
    }

    // Hash password
    const hashedPassword = await hashPassword(data.password);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role ?? UserRole.viewer,

      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    // Log activity
    await this.activityLogsService.log({
      userId: adminUserId,
      action: 'user_created',
      targetType: 'user',
      targetId: user.id,
      metadata: { createdUser: user.email },
    });

    // Generate tokens
    const accessToken = generateAccessToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  async login(data: LoginPayload, ipAddress?: string, userAgent?: string): Promise<AuthResponse> {
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new AppError(401, ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS);
    }

    // Verify password
    const isValidPassword = await comparePassword(data.password, user.password);

    if (!isValidPassword) {
      throw new AppError(401, ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS);
    }

    // Log activity
    await this.activityLogsService.log({
      userId: user.id,
      action: 'login',
      ipAddress,
      userAgent,
    });

    // Generate tokens
    const accessToken = generateAccessToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  async refreshToken(token: string): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const decoded = verifyRefreshToken(token);

      // Generate new tokens
      const accessToken = generateAccessToken({
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
      });

      const refreshToken = generateRefreshToken({
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
      });

      return { accessToken, refreshToken };
    } catch (error) {
      throw new AppError(401, ERROR_MESSAGES.AUTH.TOKEN_INVALID);
    }
  }

  async logout(userId: string): Promise<void> {
    await this.activityLogsService.log({
      userId,
      action: 'logout',
    });
  }
}
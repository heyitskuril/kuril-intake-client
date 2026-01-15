import { ActivityAction } from '@prisma/client';

export interface LogActivityPayload {
  userId?: string;
  action: ActivityAction;
  targetType?: string;
  targetId?: string;
  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

export interface ActivityLogFilters {
  userId?: string;
  action?: ActivityAction;
  targetType?: string;
  startDate?: Date;
  endDate?: Date;
  limit?: number;
  offset?: number;
}
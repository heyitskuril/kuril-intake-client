import { Router } from 'express';
import { ActivityLogsController } from './activityLogs.controller';
import { authenticate, authorize } from '@shared/middleware';

const router = Router();
const controller = new ActivityLogsController();

/**
 * @route   GET /api/activity-logs
 * @desc    Get all activity logs (Admin only)
 * @access  Private (Admin)
 */
router.get('/', authenticate, authorize(['admin']), controller.findAll);

/**
 * @route   GET /api/activity-logs/me
 * @desc    Get current user's activity logs
 * @access  Private
 */
router.get('/me', authenticate, controller.findRecentByUserId);

export default router;
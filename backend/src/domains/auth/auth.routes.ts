import { Router } from 'express';
import { AuthController } from './auth.controller';
import { validate } from '@shared/middleware/validation';
import { authenticate, authorize } from '@shared/middleware';
import { strictRateLimiter } from '@shared/middleware/RateLimiter';
import { loginSchema, registerSchema, refreshTokenSchema } from './auth.validation';

const router = Router();
const controller = new AuthController();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user (Admin only)
 * @access  Private (Admin)
 */
router.post(
  '/register',
  authenticate,
  authorize(['admin']),
  validate(registerSchema),
  controller.register
);

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login', strictRateLimiter, validate(loginSchema), controller.login);

/**
 * @route   POST /api/auth/refresh
 * @desc    Refresh access token
 * @access  Public
 */
router.post('/refresh', validate(refreshTokenSchema), controller.refreshToken);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.post('/logout', authenticate, controller.logout);

/**
 * @route   GET /api/auth/me
 * @desc    Get current user
 * @access  Private
 */
router.get('/me', authenticate, controller.me);

export default router;
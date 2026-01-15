import { Router } from 'express';
import { ServicesController } from './services.controller';
import { validate } from '@shared/middleware/validation';
import { authenticate, authorize } from '@shared/middleware';
import { createServiceSchema, updateServiceSchema, getServiceSchema } from './services.validation';

const router = Router();
const controller = new ServicesController();

/**
 * @route   GET /api/services/public
 * @desc    Get all active services (public)
 * @access  Public
 */
router.get('/public', controller.findActive);

/**
 * @route   POST /api/services
 * @desc    Create a new service (Admin only)
 * @access  Private (Admin)
 */
router.post(
  '/',
  authenticate,
  authorize(['admin']),
  validate(createServiceSchema),
  controller.create
);

/**
 * @route   GET /api/services
 * @desc    Get all services
 * @access  Private
 */
router.get('/', authenticate, controller.findAll);

/**
 * @route   GET /api/services/:id
 * @desc    Get service by ID
 * @access  Private
 */
router.get('/:id', authenticate, validate(getServiceSchema), controller.findById);

/**
 * @route   PUT /api/services/:id
 * @desc    Update service (Admin only)
 * @access  Private (Admin)
 */
router.put(
  '/:id',
  authenticate,
  authorize(['admin']),
  validate(updateServiceSchema),
  controller.update
);

/**
 * @route   DELETE /api/services/:id
 * @desc    Delete service (Admin only)
 * @access  Private (Admin)
 */
router.delete('/:id', authenticate, authorize(['admin']), controller.delete);

export default router;
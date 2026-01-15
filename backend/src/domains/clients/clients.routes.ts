import { Router } from 'express';
import { ClientsController } from './clients.controller';
import { validate } from '@shared/middleware/validation';
import { authenticate, authorize } from '@shared/middleware';
import { rateLimiter } from '@shared/middleware/RateLimiter';
import {
  createClientSchema,
  updateClientSchema,
  getClientSchema,
  listClientsSchema,
} from './clients.validation';

const router = Router();
const controller = new ClientsController();

/**
 * @route   POST /api/clients/submit
 * @desc    Submit public intake form
 * @access  Public
 */
router.post('/submit', rateLimiter, validate(createClientSchema), controller.submitIntake);

/**
 * @route   POST /api/clients
 * @desc    Create a new client (Admin only)
 * @access  Private (Admin)
 */
router.post(
  '/',
  authenticate,
  authorize(['admin']),
  validate(createClientSchema),
  controller.create
);

/**
 * @route   GET /api/clients
 * @desc    Get all clients with filters
 * @access  Private
 */
router.get('/', authenticate, validate(listClientsSchema), controller.findAll);

/**
 * @route   GET /api/clients/:id
 * @desc    Get client by ID
 * @access  Private
 */
router.get('/:id', authenticate, validate(getClientSchema), controller.findById);

/**
 * @route   PUT /api/clients/:id
 * @desc    Update client
 * @access  Private (Admin)
 */
router.put(
  '/:id',
  authenticate,
  authorize(['admin']),
  validate(updateClientSchema),
  controller.update
);

/**
 * @route   DELETE /api/clients/:id
 * @desc    Delete client
 * @access  Private (Admin)
 */
router.delete('/:id', authenticate, authorize(['admin']), controller.delete);

export default router;
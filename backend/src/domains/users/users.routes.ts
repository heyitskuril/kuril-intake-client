import { Router } from 'express';
import { UsersController } from './users.controller';
import { validate } from '@shared/middleware/validation';
import { authenticate, authorize } from '@shared/middleware';
import { createUserSchema, updateUserSchema, getUserSchema } from './users.validation';

const router = Router();
const controller = new UsersController();

router.post(
  '/',
  authenticate,
  authorize(['admin']),
  validate(createUserSchema),
  controller.create
);

router.get('/', authenticate, authorize(['admin']), controller.findAll);

router.get('/:id', authenticate, validate(getUserSchema), controller.findById);

router.put(
  '/:id',
  authenticate,
  authorize(['admin']),
  validate(updateUserSchema),
  controller.update
);

router.delete('/:id', authenticate, authorize(['admin']), controller.delete);

export default router;
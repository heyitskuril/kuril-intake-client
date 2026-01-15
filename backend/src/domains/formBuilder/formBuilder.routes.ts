import { Router } from 'express';
import { FormBuilderController } from './formBuilder.controller';
import { validate } from '@shared/middleware/validation';
import { authenticate, authorize } from '@shared/middleware';
import { createFormFieldSchema, updateFormFieldSchema, getFormFieldSchema } from './formBuilder.validation';

const router = Router();
const controller = new FormBuilderController();

router.get('/public', controller.findActive);
router.post('/', authenticate, authorize(['admin']), validate(createFormFieldSchema), controller.create);
router.get('/', authenticate, controller.findAll);
router.get('/:id', authenticate, validate(getFormFieldSchema), controller.findById);
router.put('/:id', authenticate, authorize(['admin']), validate(updateFormFieldSchema), controller.update);
router.delete('/:id', authenticate, authorize(['admin']), controller.delete);

export default router;
import { Router } from 'express';
import { AnnouncementsController } from './announcements.controller';
import { validate } from '@shared/middleware/validation';
import { authenticate, authorize } from '@shared/middleware';
import { createAnnouncementSchema, updateAnnouncementSchema, getAnnouncementSchema } from './announcements.validation';

const router = Router();
const controller = new AnnouncementsController();

router.get('/public', controller.findActive);
router.post('/', authenticate, authorize(['admin']), validate(createAnnouncementSchema), controller.create);
router.get('/', authenticate, controller.findAll);
router.get('/:id', authenticate, validate(getAnnouncementSchema), controller.findById);
router.put('/:id', authenticate, authorize(['admin']), validate(updateAnnouncementSchema), controller.update);
router.delete('/:id', authenticate, authorize(['admin']), controller.delete);

export default router;
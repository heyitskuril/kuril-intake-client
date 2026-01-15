import { Router } from 'express';
import { BrandingController } from './branding.controller';
import { validate } from '@shared/middleware/validation';
import { authenticate, authorize } from '@shared/middleware';
import { brandingSettingSchema } from './branding.validation';

const router = Router();
const controller = new BrandingController();

router.get('/public', controller.findAll);
router.post('/', authenticate, authorize(['admin']), validate(brandingSettingSchema), controller.upsert);
router.get('/', authenticate, controller.findAll);
router.delete('/:key', authenticate, authorize(['admin']), controller.delete);

export default router;
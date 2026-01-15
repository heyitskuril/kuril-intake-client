import { Router } from 'express';
import { DashboardController } from './dashboard.controller';
import { authenticate } from '@shared/middleware';

const router = Router();
const controller = new DashboardController();

router.get('/stats', authenticate, controller.getStats);

export default router;
import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import * as foodController from '../controllers/food.controller';

const router = Router();

// Apply auth middleware to all routes
router.use(authenticate);

// ─── /api/food ────────────────────────────────────────────────────────────────
router.get('/schedule', foodController.getFeedingSchedule);
router.get('/alerts', foodController.getFoodAlerts);
router.post('/schedule', foodController.createSchedule);
router.post('/schedule/:id/mark-done', foodController.markDone);

export default router;

import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import * as healthController from '../controllers/health.controller';

const router = Router();

// Apply authentication to all health routes
router.use(authenticate);

// ─── /api/health ──────────────────────────────────────────────────────────────
router.get('/', healthController.getHealthRecords);
router.get('/:petId', healthController.getHealthByPet);
router.post('/', healthController.createHealthRecord);

export default router;

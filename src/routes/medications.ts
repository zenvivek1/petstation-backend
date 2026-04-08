import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import * as medicationsController from '../controllers/medications.controller';

const router = Router();

// Apply auth middleware to all routes
router.use(authenticate);

// ─── /api/medications ─────────────────────────────────────────────────────────
router.get('/', medicationsController.getMedications);
router.post('/', medicationsController.createMedication);
router.delete('/:id', medicationsController.deleteMedication);

export default router;


import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import * as vetsController from '../controllers/vets.controller';

const router = Router();

// Apply auth middleware to all routes
router.use(authenticate);

// ─── /api/vets ────────────────────────────────────────────────────────────────
router.get('/', vetsController.getVets);
router.get('/records', vetsController.getVetRecords);
router.post('/', vetsController.createVet);
router.post('/records', vetsController.createVetRecord);

export default router;

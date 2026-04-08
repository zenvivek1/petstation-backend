import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import * as petController from '../controllers/pet.controller';

const router = Router();

// Apply authentication to all pet routes
router.use(authenticate);

// ─── /api/pets ────────────────────────────────────────────────────────────────
router.get('/', petController.getPets);
router.post('/', petController.createPet);
router.put('/:id', petController.updatePet);
router.delete('/:id', petController.deletePet);

export default router;

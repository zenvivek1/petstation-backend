import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import * as calendarController from '../controllers/calendar.controller';

const router = Router();

// Apply auth middleware to all routes
router.use(authenticate);

// ─── /api/calendar ────────────────────────────────────────────────────────────
router.get('/events', calendarController.getEvents);
router.post('/events', calendarController.createEvent);
router.delete('/events/:id', calendarController.deleteEvent);

export default router;

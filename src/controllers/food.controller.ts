import { Request, Response } from 'express';
import * as foodService from '../services/food.service';

export const getFeedingSchedule = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const schedule = await foodService.getTodaySchedule(userId);
    res.status(200).json({ schedule });
  } catch (err) {
    console.error('Get feeding schedule error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const getFoodAlerts = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const alerts = await foodService.getActiveFoodAlerts(userId);
    res.status(200).json({ alerts });
  } catch (err) {
    console.error('Get food alerts error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

export const createSchedule = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const schedule = await foodService.addFeedingScheduleItem(userId, req.body);
    res.status(201).json({ message: 'Feeding schedule added successfully.', schedule });
  } catch (err) {
    console.error('Add feeding schedule error:', err);
    res.status(err instanceof Error && err.message.includes('found or unauthorized') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};

export const markDone = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const id = req.params.id as string;
    await foodService.markFeedingDone(id, userId);
    res.status(200).json({ message: 'Feeding task marked as done.' });
  } catch (err) {
    console.error('Mark feeding as done error:', err);
    res.status(err instanceof Error && err.message.includes('not found') ? 404 : 500)
       .json({ error: err instanceof Error ? err.message : 'Internal server error.' });
  }
};
